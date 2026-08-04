import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightToLine = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 12.05h12" /><path d="M21 5v14" /><path d="m11 6 5.65 5.65c.2.2.2.5 0 .7L11 18" />
      </IconBase>
    );
  }
);

ArrowRightToLine.displayName = 'ArrowRightToLine';