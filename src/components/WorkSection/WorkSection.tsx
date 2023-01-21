import {
  Container,
  Title,
  Box,
  createStyles,
  Button,
  Card,
  Text,
  Image,
  Grid,
} from "@mantine/core";
import { useState } from "react";
import projects from "data.json";
import { truncate } from "lodash";

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
}));

const buttons = ["All", "Web Development", "UI/UX Design"];

const WorkSection = () => {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Container size="lg" mt={96}>
      <Title align="center">Some of My Latest Work</Title>
      <Box className={classes.buttonGroup} mt={64}>
        {buttons.map((button) => (
          <Button
            key={button}
            variant="subtle"
            className={`${classes.button} ${
              activeTab === button && classes.active
            }`}
            onClick={() => setActiveTab(button)}
          >
            {button}
          </Button>
        ))}
      </Box>
      <Grid mt={96}>
        {projects.map((project) => (
          <Grid.Col span={4} key={project.title}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={project.img} height={160} alt="image of project" />
              </Card.Section>

              <Text weight={600} mt={24}>
                Norway Fjord Adventures
              </Text>

              <Text size="sm" color="dimmed" mt="xs">
                {truncate(project.description, { length: 100 })}
              </Text>

              <Button
                component="a"
                variant="light"
                color="blue"
                fullWidth
                mt="lg"
                radius="md"
                href={project.link}
              >
                View Project
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkSection;
