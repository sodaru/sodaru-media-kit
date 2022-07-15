/* eslint-disable */
const images = { domains: ["about.gitlab.com"] };
if (process.env.NEXT_PUBLIC_DISABLE_SODARU_IMAGE_OPTIMIZATION === "true") {
  images.loader = "custom";
}

/**
 * @type import("@mui/material").ThemeOptions;
 */
const defaultThemeOptions = {
  palette: {
    primary: { main: "#004b89" },
    secondary: { main: "#ffb476" }
  },
  components: {
    MuiFormControl: {
      defaultProps: { size: "small", margin: "normal" }
    },
    MuiSwitch: {
      defaultProps: { size: "small" }
    },
    MuiRadio: {
      defaultProps: { size: "small" }
    },
    MuiCheckbox: {
      defaultProps: { size: "small" }
    },
    MuiButton: {
      defaultProps: { size: "small" }
    },
    MuiIconButton: {
      defaultProps: { size: "small" }
    },
    MuiSvgIcon: {
      defaultProps: { fontSize: "small" }
    }
  }
};

module.exports = {
  images: images,
  publicRuntimeConfig: {
    defaultThemeOptions: defaultThemeOptions,
    demo: {
      title: "Sodaru Media Kit",
      repoUrl: "https://gitlab.com/sodaru/solib/media-kit"
    }
  }
};
