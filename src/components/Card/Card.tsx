import { Text, Button, Image, Card as MantineCard } from "@mantine/core";
import { truncate } from "lodash";

type Project = {
  img: string;
  link: string;
  description: string;
  title: string;
  category: string;
};

type Prop = {
  project: Project;
};

const Card = ({ project }: Prop) => {
  const { img, title, description, link } = project;

  return (
    <MantineCard shadow="sm" p="lg" radius="md" withBorder>
      <MantineCard.Section>
        <Image src={img} height={160} alt="image of project" />
      </MantineCard.Section>

      <Text weight={600} mt={24}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" mt="xs">
        {truncate(description, { length: 100 })}
      </Text>

      <Button
        component="a"
        variant="light"
        color="blue"
        fullWidth
        mt="lg"
        radius="md"
        href={link}
      >
        View Project
      </Button>
    </MantineCard>
  );
};

export default Card;
