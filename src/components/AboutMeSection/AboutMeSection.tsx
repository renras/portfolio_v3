import { Container, Title, Grid, Text, Image } from "@mantine/core";
import aboutMeImg from "assets/images/typing-bro.png";

const AboutMeSection = () => {
  return (
    <Container size="lg" mt={96} id="about">
      <Title align="center">About Me</Title>
      <Grid mt={48}>
        <Grid.Col span={6}>
          <Image src={aboutMeImg} alt="User typing on a keyboard" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text mt={96}>
            Hello, my name is Renzo Visperas and I am a full stack developer
            with a passion for creating beautiful and user-friendly experiences.
            I have experience in programming languages including JavaScript and
            Python and I specialize in developing responsive and interactive
            UI/UX designs. I am a quick learner and I am always eager to explore
            new technologies and design concepts.
          </Text>

          <Text mt={24}>
            I work for Sta. Clara International Corporation where I am
            responsible for developing software to support the company's
            operations. I have received positive feedback from peers on my work.
          </Text>

          <Text mt={24}>
            In my free time, I like to stay up-to-date on the latest design
            trends and technologies by reading articles, watching tutorials, and
            experimenting with new ideas. I am also a big fan of minimalist
            design and I try to apply this principle in my work.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
