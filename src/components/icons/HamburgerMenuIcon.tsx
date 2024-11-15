import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHamburgerMenuIcon = ({
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
    <path stroke="#FF963C" strokeWidth={3} d="M3 8h26M3 16h26M3 24h26" />
  </svg>
);
export default SvgHamburgerMenuIcon;
