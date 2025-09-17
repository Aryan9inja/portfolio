import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeBtn from "@/components/theme_button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg p-6">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ThemeBtn />
          <div className="mt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
