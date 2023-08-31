import Image from 'next/image';
import { useState } from 'react';

interface ThumbnailProps {
    alt: string;
    src: string;
}

export default function Thumbnail(props: ThumbnailProps) {
    const [thumbnailFetchError, setThumbnailFetchError] =
        useState<boolean>(false);

    return (
        <>
            {thumbnailFetchError ? (
                <div className='flex items-center justify-center w-full h-full border border-gray-700 border-dashed rounded-lg aspect-video'>
                    <span className='text-sm italic font-medium text-gray-600'>
                        Coming soon
                    </span>
                </div>
            ) : (
                <div className='h-full overflow-hidden aspect-video'>
                    <Image
                        alt={props.alt}
                        decoding='async'
                        data-nimg='1'
                        sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px'
                        src={props.src}
                        width='768'
                        height='432'
                        className='object-cover h-full overflow-hidden md:w-full'
                        onError={() => {
                            setThumbnailFetchError(true);
                        }}
                    />
                </div>
            )}
        </>
    );
}
