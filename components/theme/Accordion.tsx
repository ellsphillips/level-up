import { useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

type AccordionProps = {
    title: string;
    description: string;
};

function AccordionItem({ title, description }: AccordionProps) {
    const [isOpened, setOpened] = useState<boolean>(false);
    const [height, setHeight] = useState<string>('0px');
    const contentElement = useRef(null);

    const HandleOpening = () => {
        setOpened(!isOpened);
        setHeight(
            !isOpened ? `${contentElement.current.scrollHeight}px` : '0px',
        );
    };
    return (
        <div
            onClick={HandleOpening}
            tabIndex={1}
            aria-label={title}
            onKeyDown={e => e.key === 'Enter' && HandleOpening()}
            className={`group transition-colors border-b-2 dark:border-white/20 cursor-pointer last:border-b-0 ${
                isOpened && 'bg-neutral-500/5 dark:bg-white/5'
            }`}
        >
            <div className={'p-4 flex justify-between items-center'}>
                <h3
                    className={`font-semibold transition-colors group-hover:text-primary-500 group-focus:text-primary-500 ${
                        isOpened && 'text-primary-800'
                    }`}
                >
                    {title}
                </h3>
                <span
                    className={`w-4 transition-transform h-4 ${
                        isOpened && 'rotate-180'
                    }`}
                >
                    <BsChevronDown />
                </span>
            </div>
            <div
                ref={contentElement}
                style={{ height: height }}
                className='overflow-hidden transition-all duration-200'
            >
                <p className='p-4 text-start'>{description}</p>
            </div>
        </div>
    );
}

export default function Accordion({ items }: { items: AccordionProps[] }) {
    return (
        <div className='w-full border-2 rounded dark:border-white/20'>
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
}
