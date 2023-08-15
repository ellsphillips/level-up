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
            className={`transition-all duration-200 ease-in-out relative overflow-hidden dark:bg-gray-950 bg-gray-100 ${
                props.cta &&
                !props.fade &&
                'border-slate-400 dark:border-white/20 border-y-2'
            }`}
        >
            {props.cta && (
                <>
                    <div className='absolute inset-0 flex justify-center'>
                        <Image
                            src='/img/cta-bokeh.webp'
                            alt=''
                            width={1920}
                            height={1080}
                            quality={100}
                            loading='lazy'
                            decoding='async'
                            className='block w-full h-auto origin-top scale-125 opacity-25 max-w-none'
                        />
                        <div
                            style={{ backgroundImage: 'url("/img/noise.png")' }}
                            className='absolute inset-0 bg-left bg-repeat dark:opacity-[0.15] opacity-[0.05]'
                        ></div>
                    </div>
                    {props.fade && (
                        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t dark:from-gray-950 from-gray-100' />
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
