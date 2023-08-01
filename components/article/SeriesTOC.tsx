import slugify from '@/lib/utils/slugify';
import { Article } from '@/types/article';
import Link from 'next/link';

interface SeriesTOCProps extends React.HTMLAttributes<HTMLElement> {
    series: Article[];
    children?: React.ReactNode;
}

export default function SeriesTOC(props: SeriesTOCProps) {
    return (
        <aside>
            <a className='text-xl font-medium text-white sm:font-semibold'>
                {props.series[0]?.series}
            </a>
            <p className='mt-1 text-sm text-gray-500 sm:text-base'>
                {props.series.length} lessons · 24 minute read
            </p>
            <div className='mt-4 space-y-1'>
                {props.series.map((article, i) => {
                    return (
                        <Link
                            href='/articles/[slug]'
                            as={`/articles/${slugify(article.title)}`}
                            className='flex items-center justify-between'
                        >
                            <div
                                className={`flex items-center w-full px-4 py-2 text-sm rounded hover:bg-slate-800 hover:cursor-pointer ${
                                    location.pathname ===
                                        `/articles/${slugify(article.title)}` &&
                                    'bg-slate-900'
                                }`}
                            >
                                <span className='text-gray-500'>{i + 1}</span>
                                <p className='flex-1 ml-4 text-white truncate'>
                                    {article.title}
                                </p>
                                <span className='ml-2 text-gray-500'>
                                    8 mins
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}
