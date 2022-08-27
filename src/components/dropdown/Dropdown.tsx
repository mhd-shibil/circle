import React, { useState, useRef } from 'react';

import { DROPDOWN_ICON } from 'constants/icons';
import { useOnClickOutside } from 'hooks';

import './styles.css';

interface MenuItem {
  label: string;
  value: string | number;
}

interface DropdownProps {
  id: string;
  label: string;
  options: Array<MenuItem>;
  selectedItem: MenuItem;
  onMenuItemClick: (menu: MenuItem, index: number) => void;
  type?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ className, id, label, options, selectedItem, onMenuItemClick }) => {
  const [isOpen, toggleOpen] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    toggleOpen(false);
  });

  const renderMenuItem = (menu, index) => (
    <div
      className='dropodown-menu-item text-gray px-[15px] w-full h-[40px] text-lg'
      role='presentation'
      onClick={() => {
        toggleOpen(false);
        onMenuItemClick(menu, index);
      }}
    >
      {menu.label}
    </div>
  );

  return (
    <div className={`relative ${className} mt-[30px] z-40`} ref={ref}>
      <div
        id={id}
        className={`relative dropdown-button w-full h-[45px] cursor-pointer border-b border-state-200 ${className} ${
          isOpen ? 'dropdown-button-active' : ''
        }`}
        role='presentation'
        onClick={() => toggleOpen(!isOpen)}
      >
        <label
          htmlFor={id}
          className={`dropdown-label ${selectedItem.label ? 'dropdown-label-inactive' : 'dropdown-label-active'}`}
        >
          {label}
        </label>
        {selectedItem?.label && <div className='text-lg absolute top-[18px] text-[#1F1F2F]'>{selectedItem.label}</div>}
        <img src={DROPDOWN_ICON} alt='' width='7px' className='absolute top-[22px] right-0' />
      </div>
      {isOpen && options.length && (
        <div className='dropdown-select absolute bg-white top-[45px] text-[#6D747C] w-full rounded-xl shadow-xl p-[10px] cursor-pointer'>
          {options.map(renderMenuItem)}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
