export default function NewsletterSignup() {
    return (
        <form
            method='POST'
            action='https://app.convertkit.com/forms/3655371/subscriptions'
            className='max-w-md '
        >
            <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700 sr-only'
            >
                Email address
            </label>
            <div className='flex w-full mt-1 rounded-md shadow-sm'>
                <div className='relative flex items-stretch flex-grow focus-within:z-10'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='w-5 h-5 text-neutral-800 dark:text-gray-400'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                            ></path>
                        </svg>
                    </div>
                    <input
                        type='email'
                        name='email_address'
                        required={true}
                        className='block w-full pl-10 border-gray-600 rounded-none text-neutral-950 dark:text-white dark:border-gray-400 rounded-l-md bg-gray-400/25 dark:bg-gray-800/25 focus-visible:custom-ring focus-visible:outline-none sm:text-sm dark:placeholder:text-gray-400'
                        placeholder='Enter your email'
                    />
                </div>
                <button
                    type='submit'
                    className='relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm text-white bg-gray-800 border border-gray-400 rounded-r-md hover:bg-gray-700 focus-visible:custom-ring focus-visible:outline-none'
                >
                    Sign up
                </button>
            </div>
        </form>
    );
}
