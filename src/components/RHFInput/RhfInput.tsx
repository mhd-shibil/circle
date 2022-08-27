import React, { FC } from 'react';

import { Controller } from 'react-hook-form';

import { TextField } from '@mui/material';

interface RhfInputProps {
  name: string;
  className?: string;
  showAnimated?: boolean;
  control?: any;
  label?: string;
  type?: string;
}

const RhfInput: FC<RhfInputProps> = ({ name, label, control, className, ...props }) => {
  return (
    <div className={`${className} w-full`}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return <TextField {...field} className='w-full' label={label} variant='outlined' />;
        }}
        {...props}
      />
    </div>
  );
};

export default RhfInput;
