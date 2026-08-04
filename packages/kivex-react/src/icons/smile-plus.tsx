import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const SmilePlus = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M21.95 11q.05.5.05 1a10 10 0 1 1-9-9.95" /><path d="M7 15a6.14 6.14 0 0 0 10 0" /><path d="M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path d="M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path d="M19 2v6" /><path d="M16 5h6" />
      </IconBase>
    );
  }
);

SmilePlus.displayName = 'SmilePlus';