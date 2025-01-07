import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  return (
    <Box>
      <Box sx={{ mb: "30px" }}>
        <Image src={Logo} width={287} height={44} alt="Logo" />
      </Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <LocationOnIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <Link href="mailto:fusionsoftworks@gmail.com">
            <a>
              <EmailIcon />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="tel:+50253720248">
            <a>
              <WhatsAppIcon />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="https://t.me/miracle_guy">
            <a>
              <TelegramIcon />
            </a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
export default FooterOne;
