'use client';
import { navLinks } from '@/app/data/navigations';
import { ArrowDown } from '@/app/lib/icons';
import Logo from '@/components/common/logo';
import SecondaryButton from '@/components/common/secondary-button';
import { Container } from '@/components/grid';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();

    const [isMenu, setIsMenu] = useState(false);

    // Toggle menu
    const toggleMenu = () => setIsMenu(!isMenu);

    // Close menu (used on link click)
    const closeMenu = () => setIsMenu(false);

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

    // Animation Variants
    const menuVariants = {
        initial: { x: '100%' },
        animate: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                mass: 0.8,
            },
        },
        exit: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
            },
        },
    };

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        exit: { y: 10, opacity: 0, transition: { duration: 0.2 } },
    };

    // Check if a link or any of its children are active
    const isActive = link => {
        if (pathname === link.path && link.path !== '') return true;
        if (link.children) {
            return link.children.some(child => pathname === child.path);
        }
        return false;
    };

    return (
        <>
            <header
                className={`heading bg-transparent top-0 left-0 z-20 w-full ${
                    scrolled ? 'position-fixed max-lg:absolute' : 'absolute'
                }`}>
                <Container>
                    <div className='heading-wrap flex items-center justify-between'>
                        <Logo />

                        {/* Desktop Navigation */}
                        <nav className='hidden lg:flex heading-menu items-center lg:bg-white/6 lg:rounded-full lg:border border-solid border-white/5 backdrop-blur-md lg:px-3 xl:px-6 lg:py-1 xl:py-2'>
                            {navLinks.map((link, index) => (
                                <div className='relative group z-1' key={index}>
                                    <Link
                                        className={`heading-link hover:text-primary transition-colors flex items-center gap-1.5 capitalize ${
                                            isActive(link)
                                                ? 'active text-primary'
                                                : 'text-white'
                                        }`}
                                        href={link.path || '#'}>
                                        {link.btn_title}
                                        {link.children && <ArrowDown />}
                                    </Link>
                                    {link.children && (
                                        <div className='transtion duration-300 hidden group-hover:flex lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible lg:absolute mt-2 z-1 top-full left-0 w-full min-w-50 px-2 py-3 lg:flex flex-col gap-y-2 bg-[#322A2D] backdrop-blur-2xl rounded-lg'>
                                            {link.children.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.path}
                                                    className={`heading-link hover:text-primary py-1! lg:py-0! px-2! hover:translate-x-1 ${
                                                        pathname === item.path
                                                            ? 'active text-primary'
                                                            : 'text-white'
                                                    }`}>
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Navigation Overlay */}
                        <AnimatePresence>
                            {isMenu && (
                                <motion.nav
                                    className='fixed inset-0 z-999 bg-black/95 backdrop-blur-xl flex flex-col p-6 lg:hidden overflow-y-auto'
                                    variants={menuVariants}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'>
                                    <div className='flex items-center justify-between mb-8 flex-none'>
                                        <div onClick={closeMenu}>
                                            <Logo />
                                        </div>
                                        <button
                                            className='heading-toggler text-white hover:text-primary transition-colors'
                                            onClick={toggleMenu}>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='size-8'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M6 18 18 6M6 6l12 12'
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <motion.div
                                        className='flex flex-col gap-6 grow'
                                        variants={containerVariants}>
                                        {navLinks.map((link, index) => (
                                            <motion.div
                                                key={index}
                                                variants={itemVariants}>
                                                <div className='group'>
                                                    <Link
                                                        className={`text-xl font-medium hover:text-primary transition-colors flex items-center justify-between capitalize ${
                                                            isActive(link)
                                                                ? 'text-primary'
                                                                : 'text-white'
                                                        }`}
                                                        href={link.path || '#'}
                                                        onClick={() =>
                                                            link.path !== '' &&
                                                            closeMenu()
                                                        }>
                                                        {link.btn_title}
                                                        {link.children && (
                                                            <ArrowDown
                                                                className={`size-4 transform group-hover:rotate-180 transition-transform ${
                                                                    isActive(
                                                                        link
                                                                    )
                                                                        ? 'text-primary'
                                                                        : 'text-white/70'
                                                                }`}
                                                            />
                                                        )}
                                                    </Link>

                                                    {/* Mobile Submenu */}
                                                    {link.children && (
                                                        <div
                                                            className={`pl-2 mt-3 flex flex-col gap-2.5 border-l ml-1 ${
                                                                isActive(link)
                                                                    ? 'border-primary/30'
                                                                    : 'border-white/10'
                                                            }`}>
                                                            {link.children.map(
                                                                (item, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        href={
                                                                            item.path
                                                                        }
                                                                        className={`text-base hover:text-white transition-colors pl-3 ${
                                                                            pathname ===
                                                                            item.path
                                                                                ? 'text-primary'
                                                                                : 'text-gray-400'
                                                                        }`}
                                                                        onClick={
                                                                            closeMenu
                                                                        }>
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.nav>
                            )}
                        </AnimatePresence>

                        <div className='heading-actions flex items-center flex-wrap gap-2 md:gap-3'>
                            <SecondaryButton
                                text='Try for free'
                                type='link'
                                LinkTo='#'
                            />

                            <button
                                className='heading-toggler lg:hidden!'
                                onClick={toggleMenu}>
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

