import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocumentIcon = ({
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
      d="m29.55 10.665-.993-.991a1.54 1.54 0 0 0-2.178 0l-.927.928 3.169 3.17.928-.928c.6-.602.6-1.577 0-2.179M16.76 19.287v3.17h3.17l7.827-7.829-3.17-3.169zM9.347 9.934h8.952v1.492H9.347zM9.347 15.398h8.952v1.492H9.347zM9.366 20.863h5.47v1.492h-5.47z"
    />
    <path
      fill="#FF963C"
      d="M22.586 26.599a.413.413 0 0 1-.409.414H5.368a.414.414 0 0 1-.409-.415V5.404a.414.414 0 0 1 .409-.416h16.81a.413.413 0 0 1 .409.416v5.987l1.958-1.987v-4C24.543 4.076 23.486 3 22.177 3H5.368C4.059 3.001 3 4.076 3 5.403v21.196c.001 1.326 1.06 2.4 2.367 2.401h16.81c1.31-.001 2.366-.225 2.367-1.552v-7.5l-1.958 1.988z"
    />
  </svg>
);
export default SvgDocumentIcon;
