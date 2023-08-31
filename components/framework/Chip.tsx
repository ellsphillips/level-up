import { DDATLevel } from '@/types/framework';

export const DDAT_LEVEL_DATA: Record<DDATLevel, string> = {
    working:
        'You can apply your knowledge and experience of the skill, including tools and techniques. You can adopt those most appropriate for the environment.',
    practitioner:
        'You know how to share your knowledge and experience of this skill with others, including tools and techniques. You can define those most appropriate for the environment.',
    expert: 'You have both knowledge and experience in the application of this skill. You are a recognised specialist and adviser in this skill including user needs, generation of ideas, methods and tools. You can lead or guide others in best-practice use.',
};

type VariantProps = {
    bg: string;
};

const variants: Record<DDATLevel, VariantProps> = {
    working: {
        bg: 'bg-emerald-400',
    },
    practitioner: {
        bg: 'bg-orange-400',
    },
    expert: {
        bg: 'bg-violet-400',
    },
};

export default function Chip(props: {
    variant: keyof typeof variants;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`inline-flex bg- items-center px-2 py-0.5 rounded-md text-sm font-black font-mono ${
                variants[props.variant].bg
            } text-white`}
        >
            {props.children}
        </div>
    );
}
