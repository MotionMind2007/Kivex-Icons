import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsUpDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 9 4.65-4.65c.2-.2.5-.2.7 0L17 9" /><path d="m7 15 4.65 4.65c.2.2.5.2.7 0L17 15" />
      </IconBase>
    );
  }
);

ChevronsUpDown.displayName = 'ChevronsUpDown';