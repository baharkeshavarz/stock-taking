import { useCallback, useLayoutEffect } from "react";
import type { RefObject } from "react";
import Quagga from "@ericblade/quagga2";

function getMedian(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[half];
  }
  return (arr[half - 1] + arr[half]) / 2;
}

function getMedianOfCodeErrors(decodedCodes: any[]): number {
  const errors = decodedCodes
    .filter((x: any) => x.error !== undefined)
    .map((x: any) => x.error);
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
}

interface ScannerProps {
  onDetected: (result: string) => void;
  scannerRef: RefObject<HTMLDivElement | null>;
  onScannerReady?: () => void;
  cameraId?: string;
  facingMode?: string;
  constraints?: { width: number; height: number };
  locator?: { patchSize: string; halfSample: boolean };
  numOfWorkers?: number;
  decoders?: string[];
  locate?: boolean;
}

const defaultConstraints = {
  width: 1920,
  height: 1080,
};

const defaultLocatorSettings = {
  patchSize: "medium",
  halfSample: true,
};

const defaultDecoders = ["code_128_reader", "ean_reader", "ean_8_reader"];

const Scanner: React.FC<ScannerProps> = ({
  onDetected,
  scannerRef,
  onScannerReady,
  cameraId,
  facingMode,
  constraints = defaultConstraints,
  locator = defaultLocatorSettings,
  numOfWorkers = navigator.hardwareConcurrency || 0,
  decoders = defaultDecoders,
  locate = true,
}) => {
  const errorCheck = useCallback(
    (result: any) => {
      if (!onDetected) {
        return;
      }
      alert("ok 1");
      const err = getMedianOfCodeErrors(result.codeResult.decodedCodes);
      alert("ok 2");
      // if Quagga is at least 75% certain that it read correctly, then accept the code.
      if (err < 0.3) {
        onDetected(result.codeResult.code);
      }
    },
    [onDetected]
  );

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            ...constraints,
            ...(cameraId && { deviceId: cameraId }),
            ...(!cameraId && { facingMode }),
          },
          target: scannerRef.current!,
        },
        locator,
        numOfWorkers,
        decoder: { readers: decoders as any },
        locate,
      },
      (err) => {
        if (err) {
          alert("Error starting Quagga:");
          return console.log("Error starting Quagga:", err);
        }
        if (scannerRef && scannerRef.current) {
          Quagga.start();
          if (onScannerReady) {
            alert("onScannerReady");
            onScannerReady();
          }
        }
      }
    );
    Quagga.onDetected(errorCheck);
    return () => {
      Quagga.offDetected(errorCheck);
      Quagga.stop();
    };
  }, [
    cameraId,
    onDetected,
    onScannerReady,
    scannerRef,
    errorCheck,
    constraints,
    locator,
    decoders,
    locate,
  ]);
  return "";
};

export default Scanner;
