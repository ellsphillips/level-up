import Logo from '@/components/Logo';
import ThemeToggle from '@/components/theme/ThemeSwitch';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Nav = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className='flex-col items-center justify-between pb-8 space-y-4 sm:flex sm:flex-row sm:space-y-0'>
            <Link as='/' href='/'>
                <Logo />
            </Link>
            <div className='flex items-center space-x-8'>
                <nav
                    className={`
                        flex space-x-8 sm:justify-end font-semibold
                        [&_a]:transition-colors [&_a]:hover:text-primary-400
                    `}
                >
                    <Link href='/pathways'>Pathways</Link>
                </nav>
                <ThemeToggle
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                />
            </div>
        </header>
    );
};

export default Nav;
