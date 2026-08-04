import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareArrowUpRight = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M9 9h5.7c.17 0 .3.13.3.3V15" /><path d="m9 15 5-5" /><path d="M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5" />
      </IconBase>
    );
  }
);

SquareArrowUpRight.displayName = 'SquareArrowUpRight';