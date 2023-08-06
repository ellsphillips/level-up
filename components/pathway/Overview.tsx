import Link from '@/components/Link';
import type { Pathway, PathwayContent } from 'config/pathways';
import React from 'react';

interface PathwayContentProps {
    pathway: Pathway;
}

function getSlug(pathway: string, slug: string): string {
    return `/pathways/${pathway}/${slug}`;
}

export default function PathwayContent(
    props: PathwayContentProps,
): React.ReactElement {
    const { pathway } = props;
    const { content } = pathway;

    function renderPathwayList(item: PathwayContent): React.ReactNode {
        const { name, description, content } = item;

        return (
            <>
                <h2 className='py-4 text-lg font-bold text-lu-grey-200 font-4xl'>
                    {name}
                </h2>
                {content?.map(({ name, slug }) => (
                    <Link
                        key={name}
                        href={getSlug(pathway.slug, slug)}
                        className='flex items-center w-full text-sm rounded hover:bg-slate-800 hover:cursor-pointer'
                    >
                        <h3 className='flex items-center mx-4 my-1 text-lg text-gray-500 dark:text-gray-400'>
                            {name}
                        </h3>
                    </Link>
                ))}
            </>
        );
    }

    return (
        <div className='pt-4 md:pt-8 xl:pt-12'>
            {React.Children.toArray(content.map(renderPathwayList))}
        </div>
    );
}
