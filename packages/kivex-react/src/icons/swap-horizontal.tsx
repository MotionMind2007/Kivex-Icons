import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SwapHorizontal = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11" /><path d="M6 7h14" /><path d="m16 13 3.65 3.65c.2.2.2.5 0 .7L16 21" /><path d="M4 17h14" />
      </IconBase>
    );
  }
);

SwapHorizontal.displayName = 'SwapHorizontal';