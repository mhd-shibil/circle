import React, { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { navItems, userNavOptions } from 'constants/navigation';

type SideNavProps = {
  className?: string;
  children?: React.ReactNode;
};

type NavItemProps = {
  active?: Boolean;
  className?: string;
  children?: React.ReactNode;
  label: string;
  target: string;
};

const NavItem: React.FC<NavItemProps> = ({ active, className, label, target }) => {
  return (
    <Link to={target}>
      <div className={`pl-12 leading-[50px] h-[50px] font-semibold ${className} nav-item${active ? '-active' : ''}`}>
        {label}
      </div>
    </Link>
  );
};

const SideNav: React.FC<SideNavProps> = ({ className, children }) => {
  const location = useLocation();

  const isUser = location?.pathname?.includes('/user');
  const navigationItems = isUser ? userNavOptions : navItems;

  return (
    <div className={`bg-white w-[273px] h-screen absolute shadow ${className}`}>
      {children}
      <div className='flex flex-col font-semibold'>
        <div className='p-5 pl-12 border-b flex items-center'>
          <img src='icons/travel.png' alt='Logo' width='35px' height='35px' />
          <span className='ml-4'>Circle</span>
        </div>
        {navigationItems.map((item, index) => (
          <NavItem key={index} label={item.label} target={item.path} active={location.pathname === item.path} />
        ))}
      </div>
      <div className='absolute border-t border-gray-200 w-full bottom-0 flex flex-col'>
        <img alt='Footer' src='icons/travel.png' className='p-5 w-[80px] m-auto' />
      </div>
    </div>
  );
};

export default memo(SideNav);
