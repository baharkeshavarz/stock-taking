import Container, { type ContainerProps } from "@mui/material/Container";
import * as React from "react";

export interface Breadcrumb {
  title: string;
  path?: string;
}
export interface PageContainerProps extends ContainerProps {
  children?: React.ReactNode;
  title?: string;
  breadcrumbs?: Breadcrumb[];
  actions?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children } = props;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fafafaff",
        backgroundImage: `linear-gradient(rgba(230, 247, 255, 0.98), rgba(247, 242, 242, 0.92)), url("/stock-background.svg")`,
        fill: "#eeeeeeff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        px: { xs: 2, sm: 3 },
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
