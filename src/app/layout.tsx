import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Footer ostane, ker ne potrebuje stanja iz Page
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  style: "normal",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Fizioterapija LuMa | Fizioterapija in rehabilitacija v Celju",
  description:
    "Fizioterapija LuMa v Celju nudi fizioterapijo, rehabilitacijo, manualno terapijo in terapevtske storitve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      suppressHydrationWarning
      className={`${cormorant.variable}`}
    >
      <body className={`${inter.className} bg-themebg`}>
        <ThemeProvider attribute="class">
          <div>{children}</div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
