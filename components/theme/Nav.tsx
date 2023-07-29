import Link from 'next/link';
import Logo from '../Logo';

const Nav = () => {
    return (
        <header className='flex items-center justify-between pb-8'>
            <Link as='/' href='/'>
                <Logo />
            </Link>
            <nav className='flex justify-end space-x-4'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/articles'>Articles</Link>
            </nav>
        </header>
    );
};

export default Nav;
