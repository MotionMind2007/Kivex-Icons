import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Send = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53c.4.17.4.73 0 .9Z" /><path d="M4.16 12.02h17.39" />
      </IconBase>
    );
  }
);

Send.displayName = 'Send';