'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '../components/grid';
import Logo from '../components/logo';
import { navLinks } from '../data/navigations';
import { ArrowDown } from '../lib/icons';

export default function Header() {
    const pathname = usePathname();

    const [isMenu, setIsMenu] = useState(false);
    const handleTouchStart = () => {
        setIsMenu(!isMenu);
    };

    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll === 0) {
                setScrolled(false);
            } else if (currentScroll > lastScroll) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll]);

    useEffect(() => {
        if (isMenu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenu]);

    return (
        <>
            <header
                className={`heading bg-transparent top-0 left-0 z-20 w-full ${
                    scrolled ? 'position-fixed' : 'absolute'
                }`}>
                <Container>
                    <div className='heading-wrap flex items-center justify-between'>
                        <Logo />
                        <nav
                            className={`heading-menu ${
                                isMenu ? 'show-menu' : ''
                            }`}>
                            <div className='title flex items-center justify-between lg:hidden mb-4 md:mb-6'>
                                <Logo />
                                <button
                                    className='heading-toggler'
                                    onClick={() => setIsMenu(!isMenu)}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='size-8 md:size-10'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M6 18 18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className='lg:flex items-center lg:bg-white/6 lg:rounded-full lg:border border-solid border-white/5 backdrop-blur-md lg:px-3 xl:px-6 lg:py-1 xl:py-2'>
                                {navLinks.map((link, index) => (
                                    <div
                                        className='relative group z-1'
                                        key={index}>
                                        <Link
                                            className={`heading-link flex items-center gap-1.5 capitalize ${
                                                pathname === link.path
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            href={link.path}
                                            onClick={() =>
                                                link.path != ''
                                                    ? window.innerWidth <=
                                                          991 &&
                                                      handleTouchStart(link.to)
                                                    : null
                                            }>
                                            {link.btn_title}{' '}
                                            {link.children && <ArrowDown />}
                                        </Link>
                                        {link.children && (
                                            <div className='transtion duration-300 hidden group-hover:flex lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible lg:absolute mt-2 z-1 top-full left-0 w-full min-w-50 px-2 py-3 lg:flex flex-col gap-y-2 bg-[#322A2D] backdrop-blur-2xl rounded-lg'>
                                                {link.children.map(
                                                    (item, i) => (
                                                        <Link
                                                            key={i}
                                                            href={item.path}
                                                            className={`heading-link py-1! lg:py-0! px-2! hover:translate-x-1 ${
                                                                pathname ===
                                                                item.path
                                                                    ? 'active'
                                                                    : ''
                                                            }`}>
                                                            {item.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </nav>
                        <div className='heading-actions flex items-center flex-wrap gap-2 md:gap-3'>
                            <Link href={'#'} className='btn btn-secondary'>
                                <span>Try for free</span>
                            </Link>
                            <button
                                className='heading-toggler lg:hidden!'
                                onClick={() => setIsMenu(!isMenu)}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='size-8 md:size-10'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
}

