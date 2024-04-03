import Header from './components/Header';
import './styles/globals.scss';
import { Inter } from 'next/font/google';
// import Script from 'next/script';

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
      // <Head>
        // <script type="text/javascript">
          // window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};heap.load("757684585");
        // </script>
      // </Head>
      <body className={inter.className}>
        <Header />
        <div className='cds--content'>{children}</div>
      </body>
    </html>
  );
}
