import { useTheme } from "@mui/material";
import { forwardRef } from "react";
import { LogoContainer } from "./utils/LogoContainer";
import { palette } from "./utils/palette";
import { Svg, SVGProps } from "./utils/Svg";

export const SodaruTitle = forwardRef<SVGSVGElement, SVGProps>(
  function SodaruTitle(props, ref) {
    const theme = useTheme();
    const textColor =
      theme.palette.mode == "light"
        ? palette.primary
        : theme.palette.primary.contrastText;
    return (
      <Svg width="100px" {...props} viewBox="0 0 627 100" ref={ref}>
        <polygon fill="#ffb476" points="0,0 100,0 100,20 40,20 40,50 0,50" />
        <polygon
          fill="#004b89"
          points="0,80 60,80 60,50 100,50 100,100 0,100"
        />
        <path
          fill={textColor}
          d="M 149.62554,55.280875 Q 133.1149,50.5349 125.56144,43.649893 q -7.48661,-6.951851 -7.48661,-17.112249 0,-11.497293 9.15773,-18.9839018 9.22457,-7.55345380293 23.93041,-7.55345380293 10.02671,0 17.84754,3.87699400293 7.88768,3.876994 12.16574,10.6951556 4.34491,6.818162 4.34491,14.906374 h -12.90103 q 0,-8.823504 -5.61496,-13.836858 -5.61496,-5.080199 -15.8422,-5.080199 -9.49195,0 -14.83953,4.211217 -5.28073,4.144373 -5.28073,11.564138 0,5.94918 5.01335,10.093553 5.0802,4.077528 17.1791,7.486609 12.16574,3.409081 18.9839,7.553454 6.88501,4.077528 10.1604,9.558796 3.34223,5.481267 3.34223,12.901031 0,11.831516 -9.22457,18.983902 -9.22457,7.085541 -24.6657,7.085541 -10.02671,0 -18.71652,-3.81015 -8.68982,-3.876994 -13.43579,-10.561466 -4.67913,-6.684472 -4.67913,-15.173752 h 12.90103 q 0,8.823503 6.48394,13.970547 6.55078,5.080199 17.44647,5.080199 10.1604,0 15.57482,-4.144373 5.41442,-4.144373 5.41442,-11.296758 0,-7.152386 -5.01335,-11.02938 -5.01336,-3.943838 -18.18177,-7.753988 z"
          id="path537"
        />
        <path
          fill={textColor}
          d="m 277.03159,53.141844 q 0,14.304771 -4.81282,24.999927 -4.81282,10.628311 -13.63633,16.243268 -8.8235,5.614957 -20.58817,5.614957 -11.4973,0 -20.38764,-5.614957 -8.89035,-5.681802 -13.83686,-16.109579 -4.87967,-10.494621 -5.01336,-24.264635 v -7.018696 q 0,-14.037392 4.87967,-24.799392 4.87966,-10.762001 13.77001,-16.4438023 8.95719,-5.74864630293 20.45449,-5.74864630293 11.69782,0 20.58817,5.68180150293 8.9572,5.6149571 13.77002,16.3769571 4.81282,10.695156 4.81282,24.933082 z M 264.26424,46.85844 q 0,-17.312784 -6.95185,-26.537355 -6.95185,-9.291417 -19.45181,-9.291417 -12.16574,0 -19.18444,9.291417 -6.95185,9.224571 -7.15238,25.668374 v 7.152385 q 0,16.778026 7.01869,26.403666 7.08554,9.558796 19.45182,9.558796 12.43312,0 19.25128,-9.024038 6.81816,-9.090883 7.01869,-26.002598 z"
          id="path539"
        />
        <path
          fill={textColor}
          d="M 296.28287,98.663101 V 1.3371829 h 27.47318 q 12.70049,0 22.45982,5.6149568 9.75933,5.6149573 15.04007,15.9758893 5.34758,10.360932 5.41442,23.796722 v 6.216559 q 0,13.770013 -5.34758,24.130945 -5.28073,10.360933 -15.17375,15.909045 -9.82618,5.548112 -22.92774,5.681801 z M 309.11705,11.898649 V 88.16848 h 13.50264 q 14.83953,0 23.06143,-9.224572 8.28874,-9.224572 8.28874,-26.269977 v -5.681802 q 0,-16.577491 -7.82083,-25.735218 -7.75399,-9.224572 -22.05876,-9.358262 z"
          id="path541"
        />
        <path
          fill={textColor}
          d="m 438.39477,73.262106 h -40.77528 l -9.15773,25.400995 H 375.2265 L 412.39217,1.3371829 h 11.22991 L 460.85459,98.663101 H 447.68618 Z M 401.49648,62.70064 h 33.08814 L 418.00713,17.179382 Z"
          id="path543"
        />
        <path
          fill={textColor}
          d="m 509.65123,59.291559 h -22.8609 V 98.663101 H 473.8893 V 1.3371829 h 32.21916 q 16.4438,0 25.2673,7.4866091 8.89035,7.486609 8.89035,21.79138 0,9.090883 -4.94651,15.8422 -4.87966,6.751317 -13.63632,10.093553 l 22.86089,41.31004 v 0.802136 h -13.77001 z m -22.8609,-10.494622 h 19.71919 q 9.5588,0 15.17376,-4.94651 5.6818,-4.946509 5.6818,-13.235255 0,-9.024038 -5.41442,-13.836858 -5.34758,-4.81282 -15.50798,-4.879665 h -19.65235 z"
          id="path545"
        />
        <path
          fill={textColor}
          d="M 626.76319,1.3371829 V 67.51346 q -0.0669,13.770013 -8.68982,22.526672 -8.55612,8.756659 -23.26196,9.826174 l -3.40908,0.13369 q -15.97589,0 -25.46784,-8.62297 -9.49195,-8.622969 -9.62564,-23.729877 V 1.3371829 h 12.70049 V 67.246081 q 0,10.561466 5.81549,16.443802 5.8155,5.815491 16.5775,5.815491 10.89569,0 16.64433,-5.815491 5.81549,-5.815491 5.81549,-16.376957 V 1.3371829 Z"
          id="path547"
        />
      </Svg>
    );
  }
);

export const SodaruTitleContainer = () => (
  <LogoContainer
    title="Sodaru Title"
    defaultSize={[627, 100]}
    Logo={SodaruTitle}
  />
);