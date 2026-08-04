import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const BellRing = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.02 2.17q.38.8.38 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.68z" /><path d="M10 22h4" /><path d="M2 8c.17-.83.5-3.5 3-6" /><path d="M19 2c.83.83 2.6 3.2 3 6" />
      </IconBase>
    );
  }
);

BellRing.displayName = 'BellRing';