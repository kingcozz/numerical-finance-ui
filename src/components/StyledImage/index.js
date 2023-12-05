import { useState } from 'react';

export default function StyledImage({ src, alt, className, onError }) {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const onImageLoad = (e) => {
    setImageWidth(e.target.width);
    setImageHeight(e.target.height);
  };

  return (
    <div className={`overflow-hidden flex justify-center items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={onError}
        className={`${imageWidth >= imageHeight ? 'h-full max-w-[unset]' : 'w-full max-h-[unset]'}`}
        onLoad={(e) => onImageLoad(e)}
      />
    </div>
  );
}
