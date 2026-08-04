import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ThumbsUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.26a1 1 0 0 0 .96-.7l2.16-6.93c.07-.2.29-.31.48-.24a4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12" />
      </IconBase>
    );
  }
);

ThumbsUp.displayName = 'ThumbsUp';