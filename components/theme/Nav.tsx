import Link from 'next/link'

const Nav = () => {
    return (
        <header>
            <nav className='pb-8 flex space-x-4 justify-end'>
                <Link href="/">Home</Link> 
                <Link href="/about">About</Link>
                <Link href="/articles">Articles</Link>
            </nav>
        </header>
    )
}

export default Nav
