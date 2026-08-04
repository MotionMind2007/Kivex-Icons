import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowLeftToLine = forwardRef<SVGSVGElement, IconProps>(
  (
    { 
  
        size = 24, 
        color = 'currentColor', 
        strokeWidth = 2,
        ...props
        },
        ref
  ) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        {...props}
      >
        <path d="m13 6-5.87 5.8c-.17.1-.17.29 0 .4L13 18" /><path d="M9 12h12" /><path d="M3 5v14" />
      </IconBase>
    );
  }
);

ArrowLeftToLine.displayName = 'ArrowLeftToLine';