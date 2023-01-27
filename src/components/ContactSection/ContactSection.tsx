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
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

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

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { classes } = useStyles();
  const { register, handleSubmit } = useForm<FormData>();

  const showWarningToast = (message: string) => {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const onSubmit = handleSubmit((data) => {
    const { name, email, subject, message } = data;
    if (!name || !email || !subject || !message) {
      showWarningToast("Please fill up all the fields");
      return;
    }

    console.log(data);
  });

  return (
    <>
      <Container size="lg" id="contact" mt={128} pb={64}>
        <Title align="center">Contact Me</Title>
        <Grid mt={30}>
          <Grid.Col span={6} mt={80}>
            <form onSubmit={onSubmit}>
              <TextInput label="Name" size="lg" mt={16} {...register("name")} />
              <TextInput
                label="Email"
                type="email"
                size="lg"
                mt={16}
                {...register("email")}
              />
              <TextInput
                label="Subject"
                size="lg"
                mt={16}
                {...register("subject")}
              />
              <Textarea
                label="Message"
                size="lg"
                mt={16}
                {...register("message")}
              />
              <Button type="submit" size="lg" mt={32}>
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
    </>
  );
};

export default ContactSection;
