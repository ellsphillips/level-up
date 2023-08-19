import PathwayIcon, { PathwayID } from '@/components/pathway/Icon';
import Image from 'next/image';

interface ThumbnailProps {
    pathway: string;
    title: string;
    initial?: boolean;
}

export default function Thumbnail({ pathway, title, initial }: ThumbnailProps) {
    return (
        <div className='flex items-center justify-center w-full overflow-hidden rounded outline outline-2 aspect-video outline-slate-300'>
            <Image
                src={'/img/cta-bokeh.webp'}
                alt='Pathway thumbnail'
                width={1600}
                height={900}
                className='object-cover w-full h-full scale-150 rounded opacity-25'
            />

            {initial ? (
                <div className='absolute h-36'>
                    <PathwayIcon pathway={pathway as PathwayID} />
                </div>
            ) : (
                <span className='absolute text-2xl font-black'>{title}</span>
            )}
        </div>
    );
}
