import { PathwayContent } from 'config/pathways';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PathwayTOCProps extends React.HTMLAttributes<HTMLElement> {
    slug: string;
    pathway: string;
    series: PathwayContent[];
    children?: React.ReactNode;
}

export default function PathwayTOC(props: PathwayTOCProps) {
    const router = useRouter();

    return (
        <div className='w-full'>
            <a className='text-xl font-medium sm:font-semibold'>
                {props.pathway}
            </a>
            <p className='mt-1 text-sm text-gray-500 sm:text-base'>
                {props.series.length} lessons · 24 minute read
            </p>
            <div className='mt-4 space-y-1'>
                {props.series.map((article, i) => {
                    return (
                        <Link
                            href='/pathways/[...slug]'
                            as={`/pathways/${props.slug}/${article.slug}`}
                            className='flex items-center justify-between'
                        >
                            <div
                                className={`flex justify-between duration-200 items-center w-full px-4 py-2 text-sm rounded hover:bg-neutral-200 dark:hover:bg-slate-700 hover:cursor-pointer ${
                                    router.asPath.split('/').pop() ===
                                        article.slug &&
                                    'bg-neutral-100 dark:bg-slate-800'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <span className='text-gray-500'>
                                        {i + 1}
                                    </span>
                                    <p className='flex-1 ml-4  max-w-[12rem] truncate'>
                                        {article.name}
                                    </p>
                                </div>
                                <span className='ml-2 text-gray-500'>
                                    8 mins
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
