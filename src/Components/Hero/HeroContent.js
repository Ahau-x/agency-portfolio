import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
  return (
    <Box sx={styles.Container}>
      <Typography variant="h2" component="h2" sx={styles.Title}>
        We are <br />
        Fusion Softworks
      </Typography>
      <Typography variant="h6" component="h6" sx={styles.Slogan}>
        You Dream, We Build
      </Typography>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Where ideas turn into projects. Help your startup, business, or idea
        grow and solve problems with the power of code.
      </Typography>
      <Link to="portfolio" spy={true} smooth={true} duration={500}>
        <ButtonBase sx={styles.Button}>
          See Projects
          <ArrowForwardTwoToneIcon />
        </ButtonBase>
      </Link>
    </Box>
  );
};
export default HeroContent;
