'use client';
import { FC, useEffect, useMemo, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';

interface NavbarProps {}

const routes = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Our product', url: '/product' },
  { name: 'Blogs', url: '/blogs' }
] as const;

type routeType = (typeof routes)[number]['name'];
const Navbar: FC<NavbarProps> = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<routeType | null>('Home');

  useEffect(() => {
    const path = pathname.split('/')[1];
    if (path === '' || path === '/') {
      console.log('hellow rodl');
      setActive('Home');
    } else {
      setActive(routes.find((route) => route.url.split('/')[1] === path)?.name || null);
    }
    // // console.log(headerLinks.indexOf({title: `${path}`, link: `/${path}`}))
    // console.log(headerLinks.findIndex(link => link.title === `${path}` && link.link === `/${path}`))
  }, [pathname]);

  const [scroll, setscroll] = useState(0);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setscroll(currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ss = useMemo(() => {
    return scroll;
  }, [scroll]);
  return (
    <nav
      className={cn(
        'absolute top-0 z-50 w-full py-6 transition-transform duration-300',
        { 'fixed bg-primary-slate/60 backdrop-blur-md animate-in slide-in-from-top-9': ss >= 300 }
        // `${((ss > 100) && !isVisible)? '-translate-y-full' : 'translate-y-0'}`
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-9 md:flex">
          {routes.map(({ url, name }, i) => (
            <Link
              key={i}
              href={url}
              className={cn(
                'after:ease-after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; relative font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
                { 'after:scale-x-50': active == name },
                { 'lg:text-white lg:after:bg-white': active == 'Home' && ss <= 300 }
              )}
            >
              {name}
            </Link>
          ))}
        </div>
        <Link
          href={'/order'}
          className="hidden font-semibold text-primary-yellow md:block"
        >
          Order now
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <MenuIcon
              className={cn({ 'lg:text-white lg:after:bg-white': active == 'Home' && ss <= 300 })}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-4 px-10 py-5 text-center">
            {routes.map(({ url, name }, i) => (
              <DropdownMenuItem key={i}>
                <Link
                  key={i}
                  href={url}
                  className={cn('relative mx-auto text-lg', { 'font-extrabold': active == name })}
                >
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="!mt-6">
              <Link href={'/order'} className="mx-auto font-semibold text-primary-yellow">
                Order now
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
