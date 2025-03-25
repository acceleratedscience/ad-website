import { Metadata } from 'next'
import { ProjectList, Home } from './interfaces'
import homePageData from '@/public/data/home-page.json'
import Banner from './components/Banner'
import ProjectBox from './components/ProjectBox'
import HeroBanner from './components/HeroBanner'
import TileBoxes from './components/TileBoxes'

export const metadata: Metadata = {
	title: homePageData.seo.title,
	description: homePageData.seo.description,
	keywords: homePageData.seo.keywords
}

export default async function Home() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<HeroBanner {...homePageData.heroBannerProps}></HeroBanner>
			<div className='flex flex-col w-full'>
				{homePageData.projects &&
					homePageData.projects.map(
						(project: ProjectList, index: number) => (
							<ProjectBox
								key={index}
								index={index}
								{...project}
							></ProjectBox>
						)
					)}
			</div>
			{homePageData.bannerProps && (
				<Banner {...homePageData.bannerProps}></Banner>
			)}
			<TileBoxes tileBoxes={homePageData.tileBoxes} />
		</main>
	)
}
