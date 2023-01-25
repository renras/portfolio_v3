import {
  Container,
  Grid,
  Title,
  TextInput,
  Button,
  Textarea,
  createStyles,
  Image,
  Box,
  Text,
} from "@mantine/core";
import mailSent from "assets/images/mail-sent.png";
import mail from "assets/icons/mail.svg";
import phone from "assets/icons/phone.svg";
import { Notification } from "@mantine/core";

const useStyles = createStyles(() => ({
  flex: {
    display: "flex",
    gap: 16,
  },

  contactDetails: {
    position: "absolute",
    bottom: 45,
    left: 72,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  imgWrapper: {
    position: "relative",
  },

  notification: {
    position: "fixed",
    bottom: 32,
    right: 32,
  },
}));

const ContactSection = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container size="lg" id="contact" mt={128} pb={64}>
        <Title align="center">Contact Me</Title>
        <Grid mt={30}>
          <Grid.Col span={6} mt={80}>
            <form>
              <TextInput label="Name" size="lg" mt={16} />
              <TextInput label="Email" type="email" size="lg" mt={16} />
              <TextInput label="Subject" size="lg" mt={16} />
              <Textarea label="Message" size="lg" mt={16} />
              <Button size="lg" mt={32}>
                Send Message
              </Button>
            </form>
          </Grid.Col>
          <Grid.Col span={6} className={classes.imgWrapper}>
            <Image src={mailSent} alt="user sending an email" />
            <Box className={classes.contactDetails}>
              <Box className={classes.flex}>
                <Image src={phone} alt="phone" width={24} height={24} />
                <Text>+63 945 582 0565</Text>
              </Box>
              <Box className={classes.flex}>
                <Image src={mail} alt="email" width={24} height={24} />
                <Text>renzovisperas07@gmail.com</Text>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      <Notification color="yellow" className={classes.notification}>
        Please fill out all the details to send a message.
      </Notification>
    </>
  );
};

export default ContactSection;
