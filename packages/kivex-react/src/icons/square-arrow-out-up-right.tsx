import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareArrowOutUpRight = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5H11" /><path d="M15 3h5.5c.28 0 .5.22.5.5V9" /><path d="m12 12 8-8" />
      </IconBase>
    );
  }
);

SquareArrowOutUpRight.displayName = 'SquareArrowOutUpRight';