'use client'
import ExportedImage from 'next-image-export-optimizer'
import { Image } from '@/app/interfaces'
import SectionContainer from './SectionContainer'

export default function ImageFullScreen({
	image,
	imageMobile,
	loading = 'lazy'
}: {
	image: Image
	imageMobile?: Image
	loading?: 'lazy' | 'eager'
}) {
	return (
		<SectionContainer level={2}>
			<div className='aspect-video relative'>
				<ExportedImage
					fill
					src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/${image.imagePath}`}
					alt={image.alt}
					loading={loading}
					className={`${imageMobile ? '!hidden md:!block' : ''}`}
				/>
				{imageMobile && (
					<ExportedImage
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/${imageMobile?.imagePath}`}
						fill
						alt={imageMobile?.alt}
						loading={loading}
						className='md:!hidden'
					/>
				)}
			</div>
		</SectionContainer>
	)
}
