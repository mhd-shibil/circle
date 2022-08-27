import React from 'react';

interface CheckBoxProps {
  checked: boolean;
  onPress: () => void;
  disabled: boolean;
  className?: string;
  label?: string;
  labelClassName?: string;
}
const CheckBox: React.FC<CheckBoxProps> = ({ checked, onPress, disabled, className, label, labelClassName }) => {
  return (
    <div className='flex flex-row items-center'>
      <input
        className={`h-5 w-5 border border-[#120A29] ${className} ${checked && 'accent-[#059669]'}`}
        type='checkbox'
        value=''
        checked={checked}
        onChange={onPress}
        disabled={disabled}
        id='default-checkbox'
      />
      {label && (
        <div className='ml-[5px]'>
          <label className={`text-[14px] text-[#120A29] font-[500] ${labelClassName}`}>{label}</label>
        </div>
      )}
    </div>
  );
};

export default CheckBox;
