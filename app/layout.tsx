import Header from './components/Header';
import './styles/globals.scss';
import { Inter } from 'next/font/google';
import Head from "next/head";

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
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div className='cds--content'>{children}</div>
      </body>
    </html>
  );
}

export function heapApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <script id="heap-seo-script" src="./heap.js" type="text/javascript"></script>
      </Head>
      <LayoutComponent {...pageProps}>
        <Component {...pageProps} />
      </LayoutComponent>
    </React.Fragment>
  );
}
