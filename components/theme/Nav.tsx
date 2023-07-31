import Link from 'next/link';
import Logo from '../Logo';

const Nav = () => {
    return (
        <header className='flex items-center justify-between pb-8'>
            <Link as='/' href='/'>
                <Logo />
            </Link>
            <nav className='flex justify-end space-x-8'>
                <Link href='/about'>About</Link>
                <Link href='/articles'>Articles</Link>
                <Link href='/pathways'>Pathways</Link>
            </nav>
        </header>
    );
};

export default Nav;
