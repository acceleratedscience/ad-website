import Header from './components/Header'
import './styles/globals.scss'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'

// Todo: we don't use Inter, this can be removed
const inter = Inter({ subsets: ['latin'] })
const isProduction = process.env.isProduction === 'true'

export const metadata = {
	robots: isProduction ? 'all' : 'noindex,nofollow'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<Script
					id='ad-heap-script'
					src='https://salsa.net/js/heap.js'
				></Script>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</head>
			<body className={inter.className}>
				<Header />
				<div className='cds--content'>{children}</div>
			</body>
		</html>
	)
}
