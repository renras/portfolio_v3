import {
  Container,
  Grid,
  Title,
  TextInput,
  Button,
  Textarea,
  createStyles,
  Image,
} from "@mantine/core";
import mailSent from "assets/images/mail-sent.png";

const useStyles = createStyles(() => ({
  button: {},
}));

const ContactSection = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg" id="contact" mt={96}>
      <Title align="center">Contact Me</Title>
      <Grid mt={30}>
        <Grid.Col span={6} mt={80}>
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
        <Grid.Col span={6}>
          <Image src={mailSent} alt="user sending an email" />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactSection;
