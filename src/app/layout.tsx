import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G7 Detailing Center — детейлинг в Краснодаре",
  description:
    "Профессиональный детейлинг в Краснодаре: полировка кузова, химчистка салона, уход за кожей и защитные покрытия. GARAGE 007 Detailing Center.",
  openGraph: {
    title: "G7 Detailing Center",
    description: "Детейлинг, который видно. Краснодар, Шоссе Нефтяников, 22.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}