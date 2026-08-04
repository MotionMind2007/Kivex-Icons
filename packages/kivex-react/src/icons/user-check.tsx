import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const UserCheck = forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={10} cy={8} r={5} /><path d="M15 14.75A8 8 0 0 0 2 21" /><path d="m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16" />
      </IconBase>
    );
  }
);

UserCheck.displayName = 'UserCheck';