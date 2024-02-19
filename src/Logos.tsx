import { Grid } from "@mui/material";
import { SodaruLogoContainer } from "./SodaruLogo";
import { SodaruTitleContainer } from "./SodaruTitle";
import { SomodLogoContainer } from "./SomodLogo";
import { SomodTitleContainer } from "./SomodTitle";

export const Logos = () => (
  <Grid container spacing={1}>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <SodaruLogoContainer />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <SodaruTitleContainer />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <SomodLogoContainer />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <SomodTitleContainer />
    </Grid>
  </Grid>
);
