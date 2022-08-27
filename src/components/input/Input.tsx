import { FC, memo } from 'react';

import './styles.css';

type InputProps = {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => null;
  label: string;
  type?: string;
  id: string;
  className?: string;
};

const Input: FC<InputProps> = ({ id, value, onChange, label, type, className }) => (
  <div className={`relative pt-[15px] mt-[10px] text-[#6D747C] ${className}`}>
    <input
      type={type}
      id={id}
      className='input-field w-full border-0 border-b border-slate-200 outline-0 text-base'
      placeholder='Your Email'
      onChange={onChange}
      value={value}
    />
    <label htmlFor={id} className='input-label'>
      {label}
    </label>
  </div>
);

export default memo(Input);
