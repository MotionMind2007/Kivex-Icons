import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Moon = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21" />
      </IconBase>
    );
  }
);

Moon.displayName = 'Moon';