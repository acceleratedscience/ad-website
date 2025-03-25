import ExportedImage from 'next-image-export-optimizer'
import json from '@/public/data/privacy.json'
import ProductPageBannerHero from '../components/ProductPageBannerHero'
import { Privacy } from '../interfaces'

export default async function Privacy() {
	const data = json as Privacy
	return (
		<div className={`min-h-screen w-full`}>
			<div
				className={`background-product-page bg-[image:var(--image-url)] !h-[90vh]`}
				style={{
					['--image-url' as any]: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #f4f4f4 90%), url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/${data.bannerImage.imagePath})`
				}}
			></div>

			<div className='md:hidden relative w-full h-[60vh]'>
				<div
					className='absolute inset-0 z-20'
					style={{
						background: `linear-gradient(to top, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 90%)`
					}}
				></div>
				<ExportedImage
					src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${data.bannerImageMobile.imagePath}`}
					fill
					className='object-cover z-10'
					alt={data.subtitle}
					loading={'eager'}
				/>
			</div>

			<ProductPageBannerHero
				title={data.title}
				subtitle={data.subtitle}
				description={data.description}
			></ProductPageBannerHero>
		</div>
	)
}
