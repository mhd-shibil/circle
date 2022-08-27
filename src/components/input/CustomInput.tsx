import { FC, memo } from 'react';

import './styles.css';

type InputProps = {
  id: string;
  value: string;
  type?: string;
  placeHolder?: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hasError?: boolean;
  maxLength?: number;
};

const CustomInput: FC<InputProps> = ({ id, value, type, placeHolder, onChange, className, maxLength, hasError }) => (
  <input
    type={type}
    id={id}
    className={`custom-input-field w-full text-base border border-slate-200 px-[15px] rounded-md
      outline-0 h-[45px] bg-[#FCFCFE] f-[15px] ${className} ${hasError ? 'border-red-500' : 'border-slate-200'}`}
    maxLength={maxLength}
    placeholder={placeHolder}
    onChange={onChange}
    value={value}
  />
);

export default memo(CustomInput);
