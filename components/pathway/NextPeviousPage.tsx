import Link from '@/components/Link';

interface NextPeviousPageProps {
    prev?: { slug: string; title: string };
    next?: { slug: string; title: string };
}

export default function NextPeviousPage(props: NextPeviousPageProps) {
    return (
        <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
            {props.prev && (
                <div>
                    <h2 className='text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400'>
                        Previous Article
                    </h2>
                    <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                        <Link href={`/pathways/${props.prev.slug}`}>
                            {props.prev.title}
                        </Link>
                    </div>
                </div>
            )}
            {props.next && (
                <div>
                    <h2 className='text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400'>
                        Next Article
                    </h2>
                    <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                        <Link href={`/pathways/${props.next.slug}`}>
                            {props.next.title}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
