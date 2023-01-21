import {
  Container,
  Title,
  Text,
  Button,
  createStyles,
  Grid,
  Image,
  Box,
  ActionIcon,
} from "@mantine/core";
import HeroImg from "assets/images/programming-bro.png";
import githubIcon from "assets/icons/github.svg";
import linkedinIcon from "assets/icons/linkedin.svg";

const useStyles = createStyles((theme) => ({
  button: {
    fontSize: 16,
  },

  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonGroup: {
    display: "flex",
    gap: "16px",
    marginTop: "48px",
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg">
      <Grid>
        <Grid.Col span={6}>
          <Title order={3} color="dimmed" mt={128}>
            Hi
          </Title>
          <Title order={1} size={48} mt={12}>
            I'm Renzo Visperas
          </Title>
          <Title order={3} color="dimmed" mt={12}>
            Web Developer with UI/UX Expertise
          </Title>
          <Grid.Col span={9}>
            <Text size="md" mt={24}>
              My work emphasizes creating elegant and user-centered solutions
              for web and mobile. Have a look and let's discuss how I can help
              you with your next project.
            </Text>
          </Grid.Col>
          <Button
            size="lg"
            mt={32}
            component="a"
            href="/#work"
            className={classes.button}
          >
            See my Work
          </Button>

          <Box className={classes.buttonGroup}>
            <ActionIcon component="a" href="https://github.com/renras">
              <img src={githubIcon} alt="github profile" />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/renzo-visperas-55353321a/"
            >
              <img src={linkedinIcon} alt="linkedin profile" />
            </ActionIcon>
          </Box>
        </Grid.Col>
        <Grid.Col span={6} className={classes.alignCenter}>
          <Image src={HeroImg} alt="male programming on a computer" mt={48} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HeroSection;
