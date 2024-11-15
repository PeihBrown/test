import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfoSquareIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#FF963C" d="M0 0h32v32H0z" opacity={0.01} />
    <path
      fill="#FF963C"
      fillRule="evenodd"
      d="M28.5 25.298H16.072l-8 5.702v-5.703H3.5V3h25zM26.214 5.272H5.786v17.754h4.572v3.55l4.98-3.55h10.876zm-8.85 8.119v6.534h-2.63V13.39zm-1.316-1.96c.908 0 1.643-.731 1.643-1.633s-.735-1.634-1.643-1.634c-.907 0-1.644.732-1.644 1.634s.736 1.633 1.644 1.633"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoSquareIcon;
