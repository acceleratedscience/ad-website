import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import ArticleList from '@/app/components/ArticleList'
import FaqsList from '@/app/components/FaqsList'
import FeaturesBox from '@/app/components/FeaturesBox'
import ProjectLink from '@/app/components/ProjectLink'
import TitleBoxText from '@/app/components/TitleBoxText'
import LinkButton from '@/app/components/LinkButton'
import ProductPageBannerHero from '@/app/components/ProductPageBannerHero'
import ImageFullScreen from '@/app/components/ImageFullScreen'
import { Project } from '@/app/interfaces'
import TileBoxes from '@/app/components/TileBoxes'

export const generateStaticParams = async () => {
	const dir = path.join(process.cwd(), 'public', 'data', 'projects')
	const filenames = fs.readdirSync(dir)
	return filenames.map((filename) => ({
		slug: filename.replace('.json', '')
	}))
}

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// Get project data
	const project: Project = await import(
		'@/public/data/projects/' + params.slug + '.json'
	)

	return {
		title: project.seo.title,
		description: project.seo.description,
		keywords: project.seo.keywords
	}
}

export default async function Project({
	params
}: {
	params: { slug: string }
}) {
	const project: Project = await import(
		'@/public/data/projects/' + params.slug + '.json'
	)

	return (
		<div className={`min-h-screen w-full`}>
			<div
				className={`background-product-page bg-[image:var(--image-url)] border-8 border-orange-500 bg-cover bg-center`}
				style={{
					['--image-url' as any]: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #f4f4f4 80%), url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/${project.bannerImage.imagePath})`
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
					src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/${project.bannerImageMobile.imagePath}`}
					fill
					className='object-cover z-10'
					alt={project.title}
					loading={'eager'}
				/>
			</div>

			<ProductPageBannerHero {...project}>
				{project.bannerCta && project.bannerCta.href && (
					<LinkButton
						href={project.bannerCta.href}
						className='button--green !w-full !max-w-none md:!max-w-xs'
					>
						{project.bannerCta.label}
					</LinkButton>
				)}
			</ProductPageBannerHero>

			{project.mainImage && project.mainImageMobile && (
				<ImageFullScreen
					image={project.mainImage}
					imageMobile={project.mainImageMobile}
					loading='lazy'
				></ImageFullScreen>
			)}

			{project.titleBoxText && (
				<TitleBoxText text={project.titleBoxText} />
			)}

			{project.faqs && <FaqsList faqs={project.faqs}></FaqsList>}

			{project.articles && (
				<ArticleList articles={project.articles}>
					<div className='mt-8'>
						<LinkButton
							className='!w-full !max-w-none md:!max-w-xs'
							href={project.articles.url.href}
						>
							{project.articles.url.label}
						</LinkButton>
					</div>
				</ArticleList>
			)}

			{project.features && (
				<FeaturesBox features={project.features}></FeaturesBox>
			)}

			{project.pricing && (
				<TileBoxes
					tileBoxes={project.pricing}
					className='mt-16 md:mt-24'
				></TileBoxes>
			)}

			{project.tryItOut && (
				<ProjectLink
					label={project.tryItOut.label}
					href={project.tryItOut.href}
				></ProjectLink>
			)}
		</div>
	)
}
