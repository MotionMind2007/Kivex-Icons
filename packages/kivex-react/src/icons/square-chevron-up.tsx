import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SquareChevronUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14" /><rect width={18} height={18} x={3} y={3} rx={1} />
      </IconBase>
    );
  }
);

SquareChevronUp.displayName = 'SquareChevronUp';