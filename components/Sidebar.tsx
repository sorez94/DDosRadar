'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (route: any ) => {
        router.push(route);
    };

    return (
        <aside className="w-[120px] h-screen bg-[#091028] p-6 fixed left-0 top-0 flex flex-col justify-start items-center">
            <img src='/icons/logo.png' alt="Icon" className="w-8 h-8 mb-[110px]" />
            <nav>
                <ul>
                    <li
                        className="mb-14 flex flex-col justify-start items-center cursor-pointer"
                        onClick={() => handleNavigation('/')}
                    >
                        <img
                            src={pathname === '/' ? '/icons/home-g.svg' : '/icons/home-w.svg'}
                            alt="Icon"
                            className="w-[22px] h-[22px]"
                        />
                        <a className={pathname === '/' ? 'text-green-400 mt-2 text-[12px]' : 'text-white mt-2 text-[12px]'}>
                            Home
                        </a>
                    </li>
                    <li
                        className="mb-20 flex flex-col justify-start items-center cursor-pointer"
                        onClick={() => handleNavigation('/map')}
                    >
                        <img
                            src={pathname === '/map' ? '/icons/map-g.svg' : '/icons/map-w.svg'}
                            alt="Icon"
                            className="w-[22px] h-[22px]"
                        />
                        <a className={pathname === '/map' ? 'text-blue-400 mt-2 text-[12px]' : 'text-white mt-2 text-[12px]'}>
                            Map
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
