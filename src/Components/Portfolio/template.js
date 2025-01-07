import { CustomTag, TagText } from "@asphalt-react/tag";
import { useRouter } from "next/router";
import * as React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";
import ReadDialog from "./dialog";

const Template = ({ work }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card
        sx={{
          height: {
            sm: 420,
            md: 380,
            lg: 400,
            xl: 380,
          },
          padding: 2,
          backgroundColor: "#111333",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={work.image}
            alt="image"
            sx={{
              objectFit: work.objectFit ? work.objectFit : "fill",
              borderRadius: 4,
              height: 200,
            }}
            onClick={handleClickOpen}
          />
          <CardContent sx={{ color: "white", textAlign: "center" }}>
            <Typography gutterBottom variant="body1" component="div">
              {work.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            {work.keywords &&
              work.keywords.map((item, idx) => (
                <CustomTag
                  key={idx}
                  surface="#222233"
                  content="white"
                  intent="white"
                  size="s"
                >
                  <TagText>{item}</TagText>
                </CustomTag>
              ))}
          </Box>
          <Button
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: 2,
            }}
            variant="outlined"
            onClick={() => router.push(work.url)}
          >
            Visit
          </Button>
        </CardActions>
      </Card>
      <ReadDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Template;
