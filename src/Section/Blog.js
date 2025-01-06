import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import SingleBlog from "Components/Blog/SingleBlog";

const Blog = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={{ pt: "5em", backgroundColor: "#efffff" }}
      id="blog"
    >
      <SectionHeading
        value1="Every Single Update"
        value2="News & Blogs"
        border={false}
      />
      <SingleBlog />
    </Container>
  );
};

export default Blog;
