import { styled, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { SVGProps as ReactSVGProps } from "react";

export const Svg = styled("svg")``;

export type SVGProps = ReactSVGProps<SVGSVGElement> & {
  sx?: SxProps<Theme>;
};
