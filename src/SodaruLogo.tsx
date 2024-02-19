import { forwardRef } from "react";
import { LogoContainer } from "./utils/LogoContainer";
import { Svg, SVGProps } from "./utils/Svg";

export const SodaruLogo = forwardRef<SVGSVGElement, SVGProps>(
  function SodaruLogo(props, ref) {
    return (
      <Svg width="100px" {...props} viewBox="0 0 100 100" ref={ref}>
        <polygon fill="#ffb476" points="0,0 100,0 100,20 40,20 40,50 0,50" />
        <polygon
          fill="#004b89"
          points="0,80 60,80 60,50 100,50 100,100 0,100"
        />
      </Svg>
    );
  }
);

export const SodaruLogoContainer = () => (
  <LogoContainer
    title="Sodaru Logo"
    defaultSize={[100, 100]}
    Logo={SodaruLogo}
  />
);
