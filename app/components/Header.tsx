'use client'
import { useEffect, useState } from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
	const pathname = usePathname()
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		if (
			pathname.includes('projects') ||
			pathname.includes('talk-to-a-representative') ||
			pathname.includes('privacy')
		) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [pathname])

	return (
		<div
			className={
				(theme === 'dark' ? 'border-[#E0E0E0]' : 'border-[#6F6F6F]') +
				' absolute flex items-center w-full h-12 border-b border-solid z-30'
			}
		>
			<div className='cds--grid flex-1 !ml-0'>
				<div className='cds--row'>
					<div className='cds--col'>
						<Link href={'/'} className='flex items-center'>
							<ExportedImage
								src={
									process.env.NEXT_PUBLIC_BASE_PATH +
									'/images/logo-ibm-' +
									theme +
									'.png'
								}
								width={65}
								height={26}
								alt='IBM'
								loading='eager'
							></ExportedImage>
							<div
								className={
									(theme === 'dark'
										? 'border-[#E0E0E0]'
										: 'border-[#6F6F6F]') +
									' mx-8 border-r border-solid h-6'
								}
							></div>
							<div
								className={
									(theme === 'dark'
										? 'text-[#525252]'
										: 'text-[#E5E5E5]') +
									' font-semibold flex-1'
								}
							>
								Accelerated Discovery
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
