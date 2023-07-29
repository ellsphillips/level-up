import Image from 'next/image';

interface ThumbnailProps {
    alt: string;
    src: string;
    unavailable: boolean;
}

export default function Thumbnail(props: ThumbnailProps) {
    return (
        <>
            {props.unavailable ? (
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
                    />
                </div>
            )}
        </>
    );
}
