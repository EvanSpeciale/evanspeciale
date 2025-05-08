import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// const dankMono = localFont({ src: "../fonts/DankMono-Regular.ttf", variable: '--font-dank-mono' });
const dankMono = localFont({
  src: [
    {
      path: '../fonts/DankMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/DankMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/DankMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
})
// const dankMono = localFont({
//   src: [
//     {
//       path: '../fonts/DankMono-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/DankMono-Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/DankMono-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--dank-mono'
// })

export const metadata: Metadata = {
  title: "Evan Speciale",
  description: "Evan Speciale - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dankMono.className}>{children}</body>
    </html>
  );
}
