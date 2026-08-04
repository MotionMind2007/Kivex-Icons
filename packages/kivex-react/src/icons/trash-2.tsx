import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Trash2 = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3 6h2m0 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8" /><path d="M10 11v6" /><path d="M14 11v6" />
      </IconBase>
    );
  }
);

Trash2.displayName = 'Trash2';