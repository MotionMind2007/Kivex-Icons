import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 11 4.65-4.65c.2-.2.5-.2.7 0L17 11" /><path d="m7 18 4.65-4.65c.2-.2.5-.2.7 0L17 18" />
      </IconBase>
    );
  }
);

ChevronsUp.displayName = 'ChevronsUp';