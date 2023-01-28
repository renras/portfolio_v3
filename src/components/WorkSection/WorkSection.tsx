import {
  Container,
  Title,
  Box,
  createStyles,
  Button,
  Grid,
  Text,
} from "@mantine/core";
import { useState } from "react";
import projects from "data.json";
import Card from "components/Card/Card";

const useStyles = createStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },

  button: {
    color: "#444746",

    "&:hover": {
      backgroundColor: theme.colors.gray[1],
    },
  },

  active: {
    backgroundColor: theme.colors.gray[1],
  },

  dimmed: {
    color: theme.colors.gray[6],
  },
}));

const buttons = ["All", "Web Development", "UI/UX Design"];

const WorkSection = () => {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState("All");

  const webDevelopmentProjects = projects.filter(
    (project) => project.category === "Web Development"
  );

  return (
    <Container size="lg" mt={96} id="work">
      <Title align="center">Some of My Latest Work</Title>
      <Box className={classes.buttonGroup} mt={64}>
        {buttons.map((button) => (
          <Button
            key={button}
            variant="subtle"
            className={`${classes.button} ${
              activeTab === button ? classes.active : classes.dimmed
            }`}
            onClick={() => setActiveTab(button)}
          >
            {button}
          </Button>
        ))}
      </Box>
      <Grid mt={96}>
        {activeTab === "All" &&
          projects.map((project) => (
            <Grid.Col span={12} xs={6} md={4} key={project.title}>
              <Card project={project} />
            </Grid.Col>
          ))}

        {activeTab === "Web Development" &&
          webDevelopmentProjects.map((project) => (
            <Grid.Col span={12} xs={6} md={4} key={project.title}>
              <Card project={project} />
            </Grid.Col>
          ))}

        {activeTab === "UI/UX Design" && <Text mih={359}>Coming Soon</Text>}
      </Grid>
    </Container>
  );
};

export default WorkSection;
