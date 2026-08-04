import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ThumbsDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.4.4 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2" />
      </IconBase>
    );
  }
);

ThumbsDown.displayName = 'ThumbsDown';