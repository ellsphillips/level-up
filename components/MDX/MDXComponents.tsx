/* eslint-disable react/display-name */
import Link from '@/components/Link';
import Pre from '@/components/MDX/Pre';
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import React, { useMemo } from 'react';

const Wrapper: React.ComponentType<{ layout: string }> = ({
    layout,
    ...rest
}) => {
    const Layout = require(`../../layouts/${layout}`).default;
    return <Layout {...rest} />;
};

export const MDXComponents: ComponentMap = {
    Image,
    a: Link,
    pre: Pre,
    wrapper: Wrapper,
};

interface Props {
    layout: string;
    mdxSource: string;
    [key: string]: unknown;
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
    return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
