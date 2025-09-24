import { defineConfig, loadEnv } from "vite";

import { analyzer } from "vite-bundle-analyzer";
import react from "@vitejs/plugin-react";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "انبارگردانی هایمارت",
    short_name: "انبارگردانی هایمارت",
    description: "نرم‌افزار مدیریت انبار و حسابداری",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/icon-256x256.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    resolve: {
      alias: {
        "@": "/src",
        src: "/src",
      },
    },
    server: {
      port: 5173,
      host: true,
      proxy: {
        "/g/shop": {
          target: env.VITE_SHOP_GATEWAY_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react(), analyzer(), VitePWA(manifestForPlugin)],
  };
});
