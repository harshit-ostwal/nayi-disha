import { Inter } from "next/font/google";

const inter = Inter({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
  variable: "--Inter",
  fallback: ["system-ui", "sans-serif"],
});

export { inter };
