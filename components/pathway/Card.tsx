import { Article } from '@/types/article';

import Link from '@/components/Link';
import Thumbnail from '@/components/Thumbnail';

export default function Card(data: Article) {
    if (data.thumbnail !== undefined) {
        const thumbnail = data.thumbnail ? data.thumbnail : 'example';
    }

    const thumbnailAvailable = data.thumbnail !== undefined;

    return (
        <div className='flex md:flex-col md:w-auto lg:max-w-none'>
            <div className='max-w-[40%] md:max-w-none w-full aspect-video'>
                <Link
                    className='relative flex h-full overflow-hidden transition rounded-lg'
                    href={thumbnailAvailable ? `/articles/${data.id}` : '#'}
                >
                    <Thumbnail
                        alt={data.title}
                        src={`/img/${data.thumbnail}.jpg`}
                        unavailable={!thumbnailAvailable}
                    />
                </Link>
            </div>
            <div className='pl-4 md:p-0'>
                <p className='flex justify-between mt-3 ml-auto text-sm font-medium text-gray-500'>
                    <span>Lesson {data.id}</span>
                    <span>8 mins</span>
                </p>
                <div className='mt-2 text-lg font-semibold '>
                    <a
                        className='inline-block'
                        href='/courses/react-server-components/building-a-users-table'
                    >
                        {data.title}
                    </a>
                </div>
                <p className='mt-1.5 text-lu-grey-700 dark:text-gray-400'>
                    {data.description}
                </p>
            </div>
        </div>
    );
}
