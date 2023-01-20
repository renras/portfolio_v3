import {
  Header as MantineHeader,
  Container,
  createStyles,
  Title,
  Button,
  Anchor,
  Box,
} from "@mantine/core";

const pages = ["Home", "About", "Contact"];

const useStyles = createStyles(() => ({
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
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={80} className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Box className={classes.brandContainer}>
          <Anchor href="#home" className={classes.brand}>
            <Title>RZV</Title>
          </Anchor>
        </Box>
        <nav className={classes.nav}>
          {pages.map((page) => (
            <Button
              key={page}
              component="a"
              href={`#${page.toLowerCase()}`}
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
