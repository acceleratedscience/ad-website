'use client'
import { Tile, Heading } from '@carbon/react'
import { Faqs } from '../interfaces'
import { useState } from 'react'
import SectionContainer from './SectionContainer'
import LinkButton from './LinkButton'
import dynamic from 'next/dynamic'

// Dynamic import
// - - -
// The lottie player refers to 'document', which breaks the SSR build process.
// Because we have { output: 'export' } in next.config.js, every page is
// pre-rendered on the server regardless of the 'use client' directive on top.
// import { Player } from '@lottiefiles/react-lottie-player';
const Player = dynamic(
	() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
	{ ssr: false }
)

/**
 * @param faqs Faqs
 * @param level HeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
 * @returns
 */
export default function FaqsList({
	faqs,
	level = 2
}: {
	faqs: Faqs
	level?: any
}) {
	const [currentFaq, setCurrentFaq]: any = useState(0)

	return (
		<SectionContainer level={level}>
			<div className='section-row-columns'>
				<div className='section-row-col-large'>
					<Tile className='tile--blue-60'>
						<Heading className='box-title'>{faqs.title}</Heading>
						<p
							className='mt-10 xl:mt-12 mb-8 md: mb-12 xl:mb-20 cds--type-sans text-lg'
							dangerouslySetInnerHTML={{
								__html: faqs.description
							}}
						></p>

						<div className='w-full flex flex-row overflow-x-scroll md:flex-col md:overflow-hidden snap-x md:snap-none'>
							{faqs.items.map((faq, index) => (
								<div
									key={index}
									className='min-w-[80%] w-[80%] snap-start md:snap-none border-l md:border-l-0 md:border-t border-solid border-white pl-2 md:pl-0 py-2 min-h-[7rem] cds--type-sans'
									onMouseEnter={() => setCurrentFaq(index)}
								>
									<span
										className={`cursor-pointer text-lg font-semibold ${
											currentFaq === index
												? 'text-white'
												: 'cds-text-blue-40'
										}`}
									>
										{faq.title}
									</span>
									<p
										className={`${
											index === currentFaq
												? 'max-h-max block'
												: 'max-h-0 hidden'
										}`}
									>
										{faq.description}
									</p>
								</div>
							))}
						</div>
					</Tile>
				</div>
				<div className='section-row-col-small'>
					<Tile className='tile--blue-70 h-full !flex items-end justify-center'>
						{faqs.items.map(
							(faq, index) =>
								currentFaq === index && (
									<Player
										key={index}
										autoplay
										loop
										src={faq.lottieUrl}
										className='w-full'
									></Player>
								)
						)}
					</Tile>
				</div>
			</div>
			{faqs?.url && (
				<div className='mt-4'>
					<LinkButton
						href={faqs.url.href}
						className='button--yellow !w-full !max-w-none md:!max-w-xs'
					>
						{faqs.url.label}
					</LinkButton>
				</div>
			)}
		</SectionContainer>
	)
}
