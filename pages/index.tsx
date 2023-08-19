import Card from '@/components/pathway/Card';
import Section from '@/components/theme/Section';
import { articleData } from '@/data/articles';

import Link from '@/components/Link';
import PathwayIcon, { type PathwayID } from '@/components/pathway/Icon';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import slugify from '@/lib/utils/slugify';

const Home = () => (
    <>
        <main>
            <Section cta fade>
                <Nav />

                <div className='mt-64 mb-12 md:mt-28 lg:my-48'>
                    <h1 className='pb-12 text-5xl font-bold'>
                        Level-up your
                        <br />
                        developer toolkit
                        <br />
                        and mindset
                    </h1>
                    <p className='text-lg'>
                        Accelerate your learning in software development and
                        bridge <br />
                        the gap between junior and senior roles
                    </p>
                </div>
            </Section>

            <Section className='py-8 space-y-8 lg:-top-16'>
                <h2 className='text-2xl font-bold'>New pathway launched!</h2>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {articleData.slice(0, 3).map((article, i) => (
                        <Card
                            key={i}
                            {...article}
                            slug={`${slugify(article.pathway)}/${slugify(
                                article.title,
                            )}`}
                        />
                    ))}
                </div>
            </Section>

            <Section cta className='py-12 space-y-4'>
                <h2 className='text-4xl font-bold'>
                    Digital, Data and Technology
                </h2>
                <div className='mt-4 grid gap-x-3.5 lg:mt-11 lg:grid-cols-3'>
                    <div className='lg:col-span-2 lg:pr-20'>
                        <p className='text-lg font-medium lg:text-2xl'>
                            LEVEL-UP! applies the DDaT framework to shape the
                            future of Government's technical learning.
                        </p>
                        <p className='mt-8 space-y-4 dark:text-gray-300 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:mt-6 lg:block lg:space-y-4 lg:text-lg'>
                            As a DDaT specialist you'll work at the cutting edge
                            how people interact, and are empowered by digital
                            government services. Government is undergoing a
                            digital transformation, never has the time been
                            better to pursue your career in a sector, in a role,
                            that truly delivers on the promise of innovation.
                        </p>

                        <Link
                            href='https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework'
                            className='inline-block mt-8 font-semibold hyperlink text-accent hover:text-accent-light'
                        >
                            Find out more →
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-full max-w-md px-2 mx-auto rounded-lg mt-14 lg:-mt-9 lg:items-start'>
                        <div className='flex items-center w-full space-x-4'>
                            {[
                                'data-engineer-toolkit',
                                'data-scientist-lab',
                                'software-developer-mindset',
                            ].map((level, i) => (
                                <div key={i} className='h-8'>
                                    <PathwayIcon pathway={level as PathwayID} />
                                </div>
                            ))}
                        </div>
                        <p className='mt-2 text-lg font-medium lg:text-base'>
                            Subscribe to be notified when new content is
                            available
                        </p>
                        <div className='w-full mt-10'>
                            <form>
                                <label
                                    htmlFor='email'
                                    className='text-sm font-medium'
                                >
                                    Enter your email
                                </label>
                                <div className='flex flex-col mt-2 rounded-md shadow-sm lg:flex-row'>
                                    <div className='relative flex items-stretch flex-grow focus-within:z-10'>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            required={true}
                                            data-testid='checkout-email'
                                            className='block w-full border-gray-400 rounded-md bg-white/5 focus-visible:border-white focus-visible:outline-none focus-visible:ring-0 sm:text-sm lg:rounded-none lg:rounded-l-md'
                                        />
                                    </div>
                                    <button
                                        className='relative px-4 py-2 mt-4 -ml-px space-x-2 overflow-hidden font-semibold border rounded-md border-primary-500 bg-primary-500 hover:bg-primary-400 focus-visible:border-white focus-visible:outline-none lg:mt-0 lg:rounded-l-none lg:rounded-r-md lg:border-gray-400 lg:py-2 lg:text-sm lg:focus-visible:border-white '
                                        type='submit'
                                        data-testid='checkout-button'
                                    >
                                        <span>Sign up →</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
        <Section>
            <Footer />
        </Section>
    </>
);

export default Home;
