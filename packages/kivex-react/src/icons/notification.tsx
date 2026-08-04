import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Notification = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.78l1.16 2.32a4 4 0 0 1 .42 1.78V19H3v-.06a4 4 0 0 1 .42-1.78l1.16-2.32A4 4 0 0 0 5 13.06z" /><path d="M10 22h4" />
      </IconBase>
    );
  }
);

Notification.displayName = 'Notification';