import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareChevronDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m8 10 3.76 3.9c.13.13.35.13.48 0L16 10" /><rect width={18} height={18} x={3} y={3} rx={1.5} />
      </IconBase>
    );
  }
);

SquareChevronDown.displayName = 'SquareChevronDown';