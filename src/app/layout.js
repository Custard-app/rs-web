import Footer2 from '@/sections/footer/Footer2';
import Navbar from '@/sections/navbar/Navbar';
import './globals.css';
import Home from './page';

export const metadata = {
  title: 'Rupeestop',
  description: 'Make your investment easy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`antialiased `}
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
