import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ArrowRightFromLine = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 12h12" /><path d="M3 5v14" /><path d="m15 6 5.85 5.65c.2.2.2.5 0 .7L15 18" />
      </IconBase>
    );
  }
);

ArrowRightFromLine.displayName = 'ArrowRightFromLine';