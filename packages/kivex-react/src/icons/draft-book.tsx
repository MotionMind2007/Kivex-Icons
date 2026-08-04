import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const DraftBook = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 18v2c0 1.1.9 2 2 2h13.86M4 18h15.86M4 18V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13.86q-.01.13-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54" /><path d="M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5c.28 0 .5.22.5.5v1.28" />
      </IconBase>
    );
  }
);

DraftBook.displayName = 'DraftBook';