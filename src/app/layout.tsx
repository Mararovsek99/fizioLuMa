// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// Footer ostane, ker ne potrebuje stanja iz Page
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  style: "normal",
  subsets: ["latin"],
  weight: "700",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Fizioterapija LuMa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable}`}
    >
      <body className={`${inter.className} bg-themebg`}>
        <ThemeProvider attribute="class">
          {/* Children sedaj vključuje Navbar, ki je definiran v page.tsx */}
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
