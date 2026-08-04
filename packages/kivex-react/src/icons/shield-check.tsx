import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ShieldCheck = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" /><path d="m9 12 1.74 1.63c.22.2.56.17.74-.06L15 9" />
      </IconBase>
    );
  }
);

ShieldCheck.displayName = 'ShieldCheck';