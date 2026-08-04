import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareArrowOutUpLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 9V3.5c0-.28.22-.5.5-.5H9" /><path d="m4 4 8 8" /><path d="M3 13v7.5c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13" />
      </IconBase>
    );
  }
);

SquareArrowOutUpLeft.displayName = 'SquareArrowOutUpLeft';