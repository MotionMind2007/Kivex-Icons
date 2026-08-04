import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Star = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42q.02.03.06.03h7.8c.05 0 .07.06.03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33q0-.03-.02-.05l-6.3-4.59a.05.05 0 0 1 .02-.09h7.8q.04 0 .05-.03z" />
      </IconBase>
    );
  }
);

Star.displayName = 'Star';