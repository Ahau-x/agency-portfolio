import { Grid } from "@mui/material";
import Template from "./template";

const Work = ({ works }) => {
  return (
    <Grid
      container
      rowSpacing={6}
      columnSpacing={{
        msm: 4,
        sm: 2,
        xxs: 2,
      }}
    >
      {works.map((work, idx) => (
        <Grid item lg={4} lsm={6} xs={12} key={idx}>
          <Template work={work} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Work;
