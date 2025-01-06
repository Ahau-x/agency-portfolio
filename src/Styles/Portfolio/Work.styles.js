const styles = {
  ImageContainer: {
    width: "100%",
    height: "auto",
    position: "relative",
    a: {
      textDecoration: "none",
      color: "text.primary",
      img: {
        width: "100%",
        height: "100%",
      },
    },
  },
  ImageBox: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    img: {
      transition: "all 1.2s cubic-bezier(0, 0, 0.2, 1)",
      width: "100%",
    },
    "&:hover": {
      img: {
        transform: "scale3d(1.1, 1.1, 1.1)",
      },
      "&:before": {
        transform: "scaleY(1)",
        visibility: "visible",
      },
    },
  },
};

export default styles;
