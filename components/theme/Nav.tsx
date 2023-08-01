import Link from 'next/link';
import Logo from '../Logo';

const Nav = () => {
    return (
        <header className='flex-col items-center justify-between pb-8 space-y-4 sm:flex sm:flex-row sm:space-y-0'>
            <Link as='/' href='/'>
                <Logo />
            </Link>
            <nav className='flex space-x-8 sm:justify-end'>
                <Link href='/articles'>Articles</Link>
                <Link href='/pathways'>Pathways</Link>
            </nav>
        </header>
    );
};

export default Nav;
