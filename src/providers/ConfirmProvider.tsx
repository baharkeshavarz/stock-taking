import {
  ConfirmProvider,
  type ConfirmProviderProps,
} from "material-ui-confirm";
import { type FC, type PropsWithChildren, useMemo, memo } from "react";

const ConfirmAlertProvider: FC<PropsWithChildren> = ({ children }) => {
  const defaultOptions = useMemo(() => {
    const defaultOptions: ConfirmProviderProps["defaultOptions"] = {
      confirmationButtonProps: {
        size: "small",
        variant: "contained",
        color: "primary",
        sx: {
          color: "common.white",
        },
      },
      cancellationButtonProps: {
        size: "small",
        variant: "contained",
        color: "error",
      },
      confirmationText: "بله",
      cancellationText: "خیر",

      title: "آیا مطمثن هستید؟",
      dialogProps: {
        PaperProps: {
          sx: {
            width: 320,
          },
        },
      },
      allowClose: true,
      dialogActionsProps: {
        sx: {
          gap: 1,
        },
      },
    };
    return defaultOptions;
  }, []);

  return (
    <ConfirmProvider defaultOptions={defaultOptions}>
      {children}
    </ConfirmProvider>
  );
};

export default memo(ConfirmAlertProvider);
