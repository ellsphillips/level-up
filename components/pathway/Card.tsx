import Link from '@/components/Link';
import Thumbnail from '@/components/Thumbnail';

interface Props {
    title: string;
    description: string;
    thumbnail?: string;
    readingTime?: string;
    id: number;
    slug: string;
}

export default function Card(props: Props) {
    return (
        <div className='flex md:flex-col md:w-auto lg:max-w-none'>
            <div className='max-w-[40%] md:max-w-none w-full aspect-video'>
                <Link
                    className='relative flex h-full overflow-hidden transition rounded-lg'
                    href={props.thumbnail ? `/pathways/${props.slug}` : '#'}
                >
                    <Thumbnail
                        alt={props.title}
                        src={`/img/${props.thumbnail}.jpg`}
                    />
                </Link>
            </div>
            <div className='pl-4 md:p-0'>
                <p className='flex justify-between mt-3 ml-auto text-sm font-medium text-gray-500'>
                    <span>Lesson {props.id}</span>
                    <span>{props.readingTime}</span>
                </p>
                <div className='mt-2 text-lg font-semibold '>
                    <a
                        className='inline-block'
                        href={`/pathways/${props.slug}`}
                    >
                        {props.title}
                    </a>
                </div>
                <p className='mt-1.5 text-slate-700 dark:text-gray-400'>
                    {props.description}
                </p>
            </div>
        </div>
    );
}
