import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Smile = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={12} cy={12} r={10} /><path d="M7 15a6.14 6.14 0 0 0 10 0" /><circle cx={8} cy={10} r={0.5} /><circle cx={16} cy={10} r={0.5} />
      </IconBase>
    );
  }
);

Smile.displayName = 'Smile';