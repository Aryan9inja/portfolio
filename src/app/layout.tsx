import "./globals.css";
import { ThemeProvider } from "next-themes";
import { StaticGridBackground } from "@/components/ui/grid-background-wrapper";
import SectionNav from "@/components/layout/SectionNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Singh Thakur | Full Stack Developer",
  description:
    "Portfolio of Aryan Singh Thakur — full stack developer specializing in scalable web applications, backend engineering, and cloud infrastructure.",
  keywords: [
    "Aryan Singh Thakur",
    "portfolio",
    "full stack developer",
    "web developer",
    "backend engineer",
  ],
  authors: [{ name: "Aryan Singh Thakur" }],
  openGraph: {
    title: "Aryan Singh Thakur | Full Stack Developer",
    description:
      "Portfolio of Aryan Singh Thakur — full stack developer specializing in scalable web applications.",
    type: "website",
  },
  icons: {
    icon: "/dev.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter bg-bg text-text antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StaticGridBackground />
          <div className="relative z-10">
            <SectionNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
