import { useState, useRef } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Components
import Work from "Components/Portfolio/Work";

//Data
import Portfolios from "Data/Portfolio/Portfolio.data";

//Styles
import styles from "Styles/Portfolio/Portfolio.styles";

const Portfolio = () => {
  const [Items, setItems] = useState(Portfolios);
  const [value, setValue] = useState("0");
  const containerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterItem = (filterItem) => {
    if (filterItem) {
      const updateItem = Portfolios.filter((curElem) => {
        return curElem.filter === filterItem;
      });
      setItems(updateItem);
    } else {
      setItems(Portfolios);
    }
  };

  return (
    <div style={{ backgroundColor: "#efffff" }}>
      <Container
        maxWidth={false}
        disableGutters
        as="section"
        sx={styles.Container}
        id="portfolio"
      >
        <SectionHeading
          value1="Latest projects that"
          value2="recently done"
          border={false}
        />
        <TabContext value={value}>
          <Box sx={{ mt: "3em" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              sx={styles.ButtonGroup}
            >
              <Tab label="All" value="0" onClick={() => filterItem()} />
              <Tab
                label="Web Development"
                value="1"
                onClick={() => filterItem("web")}
              />
              <Tab
                label="App Development"
                value="2"
                onClick={() => filterItem("app")}
              />
              <Tab
                label="AI Development"
                value="3"
                onClick={() => filterItem("ai")}
              />
              <Tab
                label="Blockchain Development"
                value="4"
                onClick={() => filterItem("blockchain")}
              />
            </TabList>
          </Box>
          {Portfolios.map((item, idx) => (
            <TabPanel
              key={idx}
              value={idx.toString()}
              sx={{ pr: "0px", mt: "15px" }}
            >
              <Box ref={containerRef}>
                <Fade in={Number(value) === idx ? true : false} timeout={2000}>
                  <Box>
                    <Slide
                      in={Number(value) === idx ? true : false}
                      timeout={800}
                      direction="left"
                      container={containerRef.current}
                    >
                      <Box>
                        <Work works={Items} />
                      </Box>
                    </Slide>
                  </Box>
                </Fade>
              </Box>
            </TabPanel>
          ))}
        </TabContext>
        {/* <Box component="img" src={Particle} alt="particle" sx={styles.Particle} /> */}
      </Container>
    </div>
  );
};

export default Portfolio;
