const benefits = [
    {
        name: 'Full access to all learning content',
        description:
            'All LEVEL-UP! content, including career pathways, is available to everyone.',
    },
    {
        name: 'Business applicatative recipes',
        description:
            'Easily reference materials through thought-design, knowledge share, and copyable code snippets.',
    },
    {
        name: 'Source code',
        description:
            "View the source code for every lesson on LEVEL-UP!'s open GitHub community.",
    },
];

export default function WhatsIncluded() {
    return (
        <div className='mt-11 grid gap-x-3.5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16'>
            {benefits.map((benefit, i) => (
                <div className='lg:px-2'>
                    <div className='flex items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='w-8 h-8 mr-4 dark:text-primary-500 text-primary-700 shrink-0'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            ></path>
                        </svg>
                        <p className='font-semibold'>{benefit.name}</p>
                    </div>
                    <div>
                        <p className='mt-1 ml-12 text-neutral-700 dark:text-gray-300 lg:mt-3'>
                            {benefit.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
