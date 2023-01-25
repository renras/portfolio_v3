import {
  Container,
  Grid,
  Title,
  TextInput,
  Button,
  Textarea,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  button: {},
}));

const ContactSection = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg" id="contact" mt={96}>
      <Title align="center">Contact Me</Title>
      <Grid mt={96}>
        <Grid.Col span={6}>
          <form>
            <TextInput label="Name" size="lg" mt={16} />
            <TextInput label="Email" type="email" size="lg" mt={16} />
            <TextInput label="Subject" size="lg" mt={16} />
            <Textarea label="Message" size="lg" mt={16} />
            <Button size="lg" className={classes.button} mt={32}>
              Send Message
            </Button>
          </form>
        </Grid.Col>
        <Grid.Col span={6}></Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactSection;
