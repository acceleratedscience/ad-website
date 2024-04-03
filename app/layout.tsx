import Header from './components/Header';
import './styles/globals.scss';
import { Inter } from 'next/font/google';
import { Html, Head, Main, NextScript } from 'next/document'

const inter = Inter({ subsets: ['latin'] });
const isProduction = process.env.isProduction === 'true';

export const metadata = {
  robots: isProduction ? 'all' : 'noindex,nofollow'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <!doctype html>
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div className='cds--content'>{children}</div>
      </body>
    </html>
  );
}
