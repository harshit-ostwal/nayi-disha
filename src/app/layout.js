import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/QueryProvider";
import { inter } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata = {
  title: "Nayi Disha",
  description: "A platform for personal growth and development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "font-Inter tracking-tighter antialiased"
        )}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster
          richColors
          theme="light"
          closeButton
          expand
          position="top-right"
          dir="auto"
          gap={20}
        />
      </body>
    </html>
  );
}
