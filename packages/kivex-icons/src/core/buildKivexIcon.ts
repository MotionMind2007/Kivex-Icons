import { getKivexIconString } from "./getKivexIconString";
import type { IconProps } from "../types/IconProps";
import type { IconAttrs } from "../types/IconAttrs";

export function buildKivexIcon(icons: IconProps, options?: IconAttrs): SVGElement {
    if (typeof document === 'undefined') {
        throw new Error("[Kivex] buildKivexIcon can only be used in a browser environment.");
    }

    const svgString = getKivexIconString(icons, options);
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    return doc.documentElement as unknown as SVGElement;
}