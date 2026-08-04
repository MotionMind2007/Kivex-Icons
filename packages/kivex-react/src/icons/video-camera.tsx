import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const VideoCamera = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75Z" /><path d="m15 12.1 3.7 1.8c.56.27 1.3-.02 1.3-.5V9.6c0-.48-.74-.77-1.3-.5L15 10.9" /><path d="m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21" /><circle cx={6.5} cy={3.5} r={1.5} /><circle cx={11.5} cy={3.5} r={1.5} />
      </IconBase>
    );
  }
);

VideoCamera.displayName = 'VideoCamera';