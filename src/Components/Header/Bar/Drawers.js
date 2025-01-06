import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  MapIcon,
  EmailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  BehaceIcon,
} from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1, mt: "5px" }}>
          <Image src={Logo} width={200} height={30} alt="Logo" />
        </Box>
        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Stack>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Fusion Softworks is a dynamic software agency dedicated to delivering
        innovative technology solutions tailored to meet the unique needs of our
        clients. Our team of skilled developers and strategists collaborates
        closely with businesses to create custom software applications that
        drive efficiency and enhance user experiences. We pride ourselves on our
        commitment to quality, agility, and customer satisfaction, ensuring that
        every project aligns with our clients&apos; goals. Whether you are a
        startup or an established enterprise. We are here to turn your vision
        into reality.
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <MapIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <EmailIcon />
        </Box>
        <Box>
          <Link href="mailto:info@codestation21.com">
            <a>
              <Typography variant="body1" component="p">
                info@codestation21.com
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <PhoneIcon />
        </Box>
        <Box>
          <Link href="tel:+8801552938771">
            <a>
              <Typography variant="body1" component="p">
                +880 1552-938771
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Social}>
        <Link href="https://github.com/codestation21">
          <a target="_blank">
            <ButtonBase>
              <GitHubIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://www.facebook.com/codestation21">
          <a target="_blank">
            <ButtonBase>
              <FacebookIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://twitter.com/codestation21">
          <a target="_blank">
            <ButtonBase>
              <TwitterIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://behance.com/codestation21">
          <a target="_blank">
            <ButtonBase>
              <BehaceIcon />
            </ButtonBase>
          </a>
        </Link>
      </Stack>
    </Box>
  );
};
export default Drawers;
