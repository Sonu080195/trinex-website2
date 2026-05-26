import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "RUDRON Global Talent Solutions",
  description: "AEC & MEP Recruitment Specialists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>
  );
}