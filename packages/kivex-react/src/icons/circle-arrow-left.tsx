import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m12 8-3.91 3.87c-.12.07-.12.19 0 .26L12 16" /><path d="M9 12h7" /><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
      </IconBase>
    );
  }
);

CircleArrowLeft.displayName = 'CircleArrowLeft';