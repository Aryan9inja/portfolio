import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg p-6">
        <Navbar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
