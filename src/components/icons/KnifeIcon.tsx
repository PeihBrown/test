import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKnifeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 56 56"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#fff" d="M0 0h56v56H0z" opacity={0.01} />
    <g clipPath="url(#KnifeIcon_svg__a)">
      <g fill="#fff" clipPath="url(#KnifeIcon_svg__b)">
        <path d="M11.023 46.229a2.793 2.793 0 0 0 .006 3.95 2.795 2.795 0 0 0 3.951.005l8.703-8.702-3.957-3.957zM54.28 13.373l-7.849 7.876-1.31-1.315 7.588-8.14-.735-.738-8.167 7.56-1.313-1.316 7.624-8.105-.794-.797-8.141 7.585-1.313-1.318 7.85-7.877L46.934 6s-7.39 5.814-11.038 8.815c-1.28 1.049-1.794 2.825-1.615 4.476.246 2.232.517 3.098-.387 4.005l-7.656 7.68C16.419 21.118 5.669 10.33 4.562 9.235c-.651-.645-1.584-.645-2.169-.058-2.037 2.045 4.115 14.26 12.219 24.498 1.69-1.705 3.227-3.239 3.227-3.239l19.683 19.75c1.218 1.222 2.99.94 3.925 0h.001a2.794 2.794 0 0 0 0-3.94c-2.083-2.09-6.352-6.378-11.272-11.319l7.649-7.675c.918-.921 1.767-.639 3.991-.378 1.67.197 3.498-.307 4.55-1.62C49.334 21.548 55 14.093 55 14.093z" />
      </g>
    </g>
    <defs>
      <clipPath id="KnifeIcon_svg__a">
        <path fill="#fff" d="M2 6h53v45H2z" />
      </clipPath>
      <clipPath id="KnifeIcon_svg__b">
        <path fill="#fff" d="M2 6h53v45H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKnifeIcon;
