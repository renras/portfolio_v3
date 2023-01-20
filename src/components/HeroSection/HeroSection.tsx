import {
  Container,
  Title,
  Text,
  Button,
  createStyles,
  Grid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Container size="md">
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
          <Text size="md" mt={24}>
            My work emphasizes creating elegant and user-centered solutions for
            web and mobile. Have a look and let's discuss how I can help you
            with your next project.
          </Text>
          <Button size="lg" mt={32}>
            See my Work
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HeroSection;
