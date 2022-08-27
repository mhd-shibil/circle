import React, { FC, memo } from 'react';

type AvatarProps = {
  className?: string;
  name: string;
  imageUrl?: string;
};

const Avatar: FC<AvatarProps> = ({ className = '', name, imageUrl }) => {
  const getColorValue = () => Math.floor(Math.random() * 56) + 200;

  const getRandomColor = () => `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()}`;

  const getFirstLetters = (str) =>
    str
      .split(' ')
      .map((word) => word[0])
      .join('');

  return (
    <div
      className={`flex justify-center items-center rounded-full	h-[32px] w-[32px]
        text-xs cursor-pointer hover:opacity-70 ${className}`}
      style={{ backgroundColor: getRandomColor() }}
    >
      {imageUrl ? <img src={imageUrl} alt={name} /> : <>{getFirstLetters(name)}</>}
    </div>
  );
};

export default memo(Avatar);
