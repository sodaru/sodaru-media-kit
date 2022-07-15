import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography
} from "@mui/material";
import { ComponentType, createRef, FunctionComponent } from "react";
import { SVGProps } from "./Svg";
import DownloadIcon from "@mui/icons-material/Download";

export const LogoContainer: FunctionComponent<{
  title: string;
  defaultSize: [number, number];
  Logo: ComponentType<SVGProps>;
}> = ({ title, defaultSize, Logo }) => {
  const ref = createRef<SVGSVGElement>();

  const download = (png = false) => {
    if (ref.current) {
      const { x, y, width, height } = ref.current.viewBox?.baseVal || {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      };
      const svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- ${title}, Downloaded from ${window.location.href} -->

<svg width="${width}" height="${height}" viewBox="${x} ${y} ${width} ${height}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">${ref.current.innerHTML}</svg>
`;
      const base64doc = btoa(unescape(encodeURIComponent(svgContent)));

      if (png) {
        const canvas = document.createElement("canvas");
        const img_to_download = document.createElement("img");
        img_to_download.src = "data:image/svg+xml;base64," + base64doc;
        img_to_download.onload = () => {
          canvas.setAttribute("width", width + "");
          canvas.setAttribute("height", height + "");
          const context = canvas.getContext("2d");
          context.drawImage(img_to_download, 0, 0, width, height);
          const dataURL = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          const my_evt = new MouseEvent("click");
          a.download = title + ".png";
          a.href = dataURL;
          a.dispatchEvent(my_evt);
        };
      } else {
        const a = document.createElement("a");
        const e = new MouseEvent("click");
        a.download = title + ".svg";
        a.href = "data:image/svg+xml;base64," + base64doc;
        a.dispatchEvent(e);
      }
    }
  };

  const onSvgDownload = () => {
    download();
  };

  const onPngDownload = () => {
    download(true);
  };

  return (
    <Card
      sx={{
        maxWidth: 425,
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ textAlign: "center" }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Logo width="100%" ref={ref} />
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Box width="100%" display="flex">
          <Typography variant="subtitle2" flexGrow={1}>
            Default Size
          </Typography>
          <Typography variant="body2">
            {defaultSize[0]} x {defaultSize[1]}
          </Typography>
        </Box>
        <Box width="100%" display="flex" pt={2} ml={0}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onSvgDownload}
          >
            .SVG
          </Button>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onPngDownload}
            sx={{ ml: 1 }}
          >
            .PNG
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
