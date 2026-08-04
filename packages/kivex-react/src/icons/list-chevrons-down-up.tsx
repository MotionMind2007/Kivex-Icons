import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListChevronsDownUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19" /><path d="M3 5h7" /><path d="M3 12h7" /><path d="M3 19h7" /><path d="m14 5 3.25 2.9c.14.13.36.13.5 0L21 5" />
      </IconBase>
    );
  }
);

ListChevronsDownUp.displayName = 'ListChevronsDownUp';