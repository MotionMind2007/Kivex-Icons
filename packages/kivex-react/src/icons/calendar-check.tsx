import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CalendarCheck = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /><path d="m9 16.4 1.93 1.54q.07.05.13 0L15 14" />
      </IconBase>
    );
  }
);

CalendarCheck.displayName = 'CalendarCheck';