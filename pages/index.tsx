import Card from '@/components/pathway/Card';
import Section from '@/components/theme/Section';
import { articleData } from '@/data/articles';

import Link from '@/components/Link';
import NewsletterSignup from '@/components/NewsletterSignup';
import WhatsIncluded from '@/components/WhatsIncluded';
import Chip, { DDAT_LEVEL_DATA } from '@/components/framework/Chip';
import PathwayIcon, { type PathwayID } from '@/components/pathway/Icon';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import slugify from '@/lib/utils/slugify';
import { DDATLevel } from '@/types/framework';

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

            <Section className='py-12 space-y-8'>
                <h2 className='text-2xl font-bold'>Pathways</h2>

                <p className='mt-4 text-lg font-medium'>
                    Aligned to the DDaT{' '}
                    <Link href='https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework'>
                        Profession Capability Framework
                    </Link>
                    , each career pathway covers the relevant profession's skill
                    requirements progressively through the below skill levels.
                </p>

                {['working', 'practitioner', 'expert'].map((level, i) => (
                    <div key={i} className='flex space-x-6'>
                        <div className='flex items-start justify-end w-32 h-full pt-1'>
                            <Chip variant={level as DDATLevel}>{level}</Chip>
                        </div>
                        <div className='flex-1'>
                            <p className='text-lg font-semibold'>
                                {DDAT_LEVEL_DATA[level as DDATLevel]}
                            </p>
                        </div>
                    </div>
                ))}
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
                            className='inline-block mt-8 font-semibold hyperlink'
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
                            <NewsletterSignup />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className='py-12'>
                <h2 className='text-2xl font-bold'>Open to all</h2>
                <p className='mt-4 font-medium text-md'>
                    All content is available to everyone, for free, always.
                </p>
                <WhatsIncluded />
            </Section>
        </main>
        <Section>
            <Footer />
        </Section>
    </>
);

export default Home;
