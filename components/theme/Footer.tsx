const Footer = () => {
    return (
        <footer className='flex justify-between pt-8 mt-12 text-sm border-t-2 border-t-white/10'>
            <div className='flex space-x-8'>
                <a
                    href='https://www.github.com/ellsphillips/level-up'
                    className='flex items-center text-sm text-gray-500 hover:text-gray-400'
                >
                    <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 mr-2'
                    >
                        <path
                            d='M16 35.9L4 23.9L16.1 11.8L18.25 13.95L8.3 23.9L18.15 33.75L16 35.9ZM31.9 36L29.75 33.85L39.7 23.9L29.85 14.05L32 11.9L44 23.9L31.9 36Z'
                            fill='currentColor'
                        />
                    </svg>
                    Source
                </a>
            </div>

            <span className='text-gray-600 lg:mt-0'>
                &copy; 2023 LEVEL-UP. All rights reserved.
            </span>
        </footer>
    );
};

export default Footer;
