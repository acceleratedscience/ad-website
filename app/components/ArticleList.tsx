'use client';
import { Articles } from '../interfaces';
import { Link, Tile, Heading } from '@carbon/react';
import SectionContainer from './SectionContainer';

/**
 * @param articles Articles
 * @param level HeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
 * @returns
 */
export default function ArticleList({
  articles,
  children,
  level = 2
}: {
  articles: Articles;
  children: any;
  level?: any;
}) {
  return (
    <SectionContainer level={level}>
      <div className='section-row-columns'>
        <div className='section-row-col-large'>
          <Tile className='tile--gray'>
            <Heading className='box-title'>{articles.title}</Heading>
            <p
              className='mt-10 xl:mt-12 whitespace-pre-line cds--type-sans'
              dangerouslySetInnerHTML={{ __html: articles.description }}
            ></p>
            <div>{children}</div>
          </Tile>
        </div>
        <div className='section-row-col-small'>
          <Tile className='tile--black'>
            {articles.items.map((article, index) => (
              <div key={index} className='mb-6 cds--type-sans'>
                <Link
                  inline={true}
                  className='text-white underline hover:no-underline hover:link'
                  href={article.url}
                  target='_blank'
                >
                  {article.title}
                </Link>
                <span>{article.authors}</span>
              </div>
            ))}
          </Tile>
        </div>
      </div>
    </SectionContainer>
  );
}
