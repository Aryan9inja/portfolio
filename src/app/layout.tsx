import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeBtn from "@/components/theme_button";
import { StaticGridBackground } from "@/components/ui/grid-background-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aryan's Portfolio</title>
        <link rel="icon" href="/dev.png" type="image/png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StaticGridBackground />
          <div className="relative z-10">
            <Navbar />
            <ThemeBtn />
            <div className="mt-15">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
