import { forwardRef } from "react";
import { LogoContainer } from "./utils/LogoContainer";
import { Svg, SVGProps } from "./utils/Svg";

export const SomodLogo = forwardRef<SVGSVGElement, SVGProps>(function SomodLogo(
  props,
  ref
) {
  return (
    <Svg width="100px" {...props} viewBox="0 0 100 100" ref={ref}>
      <polygon fill="#ffb476" points="10,55 45,55 45,90 10,90" />
      <polygon fill="#004b89" points="55,55 90,55 90,90 55,90" />
      <g>
        <rect fill="#004b89" x={10} y={10} width={5} height={35} />
        <rect fill="#004b89" x={40} y={10} width={5} height={35} />
        <rect fill="#004b89" x={10} y={10} width={35} height={5} />
        <rect fill="#004b89" x={10} y={40} width={35} height={5} />
      </g>
      <path
        fill="#ffb476"
        d="M 72.20,2.93
           C 72.79,2.96 73.39,3.79 73.80,4.20
             73.80,4.20 74.90,5.20 74.90,5.20
             74.90,5.20 77.40,7.70 77.40,7.70
             77.40,7.70 91.70,22.00 91.70,22.00
             91.70,22.00 95.80,26.00 95.80,26.00
             96.07,26.27 97.08,27.16 97.08,27.50
             97.08,27.85 95.98,28.81 95.70,29.10
             95.70,29.10 94.80,30.10 94.80,30.10
             94.80,30.10 91.60,33.30 91.60,33.30
             91.60,33.30 77.80,47.10 77.80,47.10
             77.80,47.10 74.10,50.90 74.10,50.90
             73.84,51.16 72.88,52.20 72.60,52.27
             72.19,52.37 71.29,51.29 71.00,51.00
             71.00,51.00 69.90,50.00 69.90,50.00
             69.90,50.00 66.90,47.00 66.90,47.00
             66.90,47.00 52.50,32.60 52.50,32.60
             52.50,32.60 48.90,29.10 48.90,29.10
             48.64,28.84 47.72,28.03 47.72,27.70
             47.72,27.48 47.96,27.25 48.10,27.10
             48.10,27.10 49.20,26.00 49.20,26.00
             49.20,26.00 50.00,25.10 50.00,25.10
             50.00,25.10 53.50,21.60 53.50,21.60
             53.50,21.60 66.40,8.70 66.40,8.70
             66.40,8.70 70.30,4.70 70.30,4.70
             70.79,4.21 71.64,3.24 72.20,2.93 Z
           M 72.40,10.00
           C 71.48,10.66 69.36,12.97 68.49,13.90
             68.49,13.90 64.20,18.20 64.20,18.20
             64.20,18.20 58.00,24.40 58.00,24.40
             57.29,25.11 55.28,27.04 54.80,27.70
             54.80,27.70 57.90,30.80 57.90,30.80
             57.90,30.80 58.90,31.70 58.90,31.70
             58.90,31.70 66.30,39.10 66.30,39.10
             66.30,39.10 70.20,43.00 70.20,43.00
             70.20,43.00 72.50,45.20 72.50,45.20
             72.50,45.20 75.60,42.10 75.60,42.10
             75.60,42.10 76.50,41.10 76.50,41.10
             76.50,41.10 83.90,33.70 83.90,33.70
             83.90,33.70 87.80,29.80 87.80,29.80
             87.80,29.80 90.00,27.50 90.00,27.50
             90.00,27.50 86.90,24.40 86.90,24.40
             86.90,24.40 85.80,23.40 85.80,23.40
             85.80,23.40 72.40,10.00 72.40,10.00 Z"
      />
    </Svg>
  );
});

export const SomodLogoContainer = () => (
  <LogoContainer title="Somod Logo" defaultSize={[100, 100]} Logo={SomodLogo} />
);
