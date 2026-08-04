import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CircleChevronUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14" /><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" />
      </IconBase>
    );
  }
);

CircleChevronUp.displayName = 'CircleChevronUp';