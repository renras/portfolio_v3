import {
  Header as MantineHeader,
  Container,
  createStyles,
  Title,
  Button,
  Anchor,
  Box,
} from "@mantine/core";

const pages = ["Home", "About", "Work", "Contact"];

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
  },

  inner: {
    flex: 1,
    display: "flex",
  },

  brandContainer: {
    flex: 1,
  },

  brand: {
    ":hover": {
      textDecoration: "none",
    },
  },

  nav: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },

  links: {
    color: "#444746",

    "&:hover": {
      backgroundColor: theme.colors.gray[1],
    },
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={80} className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Box className={classes.brandContainer}>
          <Anchor href="/#home" className={classes.brand}>
            <Title>RZV</Title>
          </Anchor>
        </Box>
        <nav className={classes.nav}>
          {pages.map((page) => (
            <Button
              key={page}
              component="a"
              href={`/#${page.toLowerCase()}`}
              variant="subtle"
              className={classes.links}
            >
              {page}
            </Button>
          ))}
        </nav>
      </Container>
    </MantineHeader>
  );
};

export default Header;
