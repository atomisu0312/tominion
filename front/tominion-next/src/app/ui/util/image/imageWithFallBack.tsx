'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps{
  src: string,
  fallback: string,
}

const ImageWithFallback = ({
  fallback,
  src,
  ...props
}:Props) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <Image
      onError={() =>setError(true)}
      src={error ? fallback : src}
      {...props}
    />
  )
}

export default ImageWithFallback;