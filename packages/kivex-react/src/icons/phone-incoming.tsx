import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PhoneIncoming = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03" /><path d="M16 2v5a1 1 0 0 0 1 1h5" /><path d="m17 7 5-5" />
      </IconBase>
    );
  }
);

PhoneIncoming.displayName = 'PhoneIncoming';