import Carousel from "react-material-ui-carousel";
import DetailImage from "Assets/portfolio/alison.png";
import DetailImage2 from "Assets/portfolio/vocalo.png";
import { Box } from "@mui/material";

const Detail = () => {
  return (
    <>
      <Carousel>
        <Box component="img" src={DetailImage} height="500px" />
        <Box component="img" src={DetailImage2} height="500px" />
      </Carousel>
    </>
  );
};

export default Detail;
