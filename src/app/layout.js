import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer2 from '@/components/footer/Footer2';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  title: 'Rupeestop',
  description: 'Make your investment easy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        <Navbar />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
