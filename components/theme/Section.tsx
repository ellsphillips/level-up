import Image from 'next/image';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    cta?: boolean;
    fade?: boolean;
}

export default function Section(props: SectionProps) {
    return (
        <section
            className={`relative overflow-hidden bg-gray-950 ${
                props.cta && !props.fade && 'border-white/5 border-y-2'
            }`}
        >
            {props.cta && (
                <>
                    <div className='absolute inset-0 flex justify-center'>
                        <Image
                            src='/img/cta-bokeh.webp'
                            alt=''
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            quality={100}
                            loading='lazy'
                            decoding='async'
                            className='block origin-top scale-125 opacity-25 max-w-none'
                        />
                        <div
                            style={{ backgroundImage: 'url("/img/noise.png")' }}
                            className='absolute inset-0 bg-left bg-repeat opacity-[0.15]'
                        ></div>
                    </div>
                    {props.fade && (
                        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-950' />
                    )}
                </>
            )}
            <div
                className={`relative max-w-6xl px-8 mx-auto my-8 sm:px-6 ${props.className}`}
            >
                {props.children}
            </div>
        </section>
    );
}
