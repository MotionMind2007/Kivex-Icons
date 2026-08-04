import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ClockArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M22 12a10 10 0 1 0-10 10" /><path d="m18 13-3.91 3.9c-.12.05-.12.15 0 .2L18 21" /><path d="M15 17h7" /><path d="M12 6v5l1 1" />
      </IconBase>
    );
  }
);

ClockArrowLeft.displayName = 'ClockArrowLeft';