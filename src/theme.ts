import { MantineThemeOverride } from "@mantine/core";

const customLabel = {
  styles: {
    root: {
      "& label": {
        fontFamily: "Noto Sans",
        fontWeight: 600,
        color: "#444746",
        fontSize: 14,
      },
    },
  },
};

const theme: MantineThemeOverride = {
  fontFamily: "Poppins",
  fontSizes: { md: 14 },
  headings: {
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
  components: {
    Title: {
      defaultProps: {
        color: "#1a1a1a",
      },
    },
    Text: {
      defaultProps: {
        color: "#444746",
        size: 14,
      },
    },
    Table: {
      styles: {
        root: {
          "& td": {
            fontFamily: "Open Sans",
          },
        },
      },
    },
    TextInput: customLabel,
    FileInput: customLabel,
    MultiSelect: customLabel,
    NumberInput: customLabel,
    PasswordInput: customLabel,
    Select: customLabel,
    Textarea: customLabel,
    Autocomplete: customLabel,
  },
  globalStyles: (theme) => ({
    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark : "#F8F8F8",
    },
  }),
};

export default theme;
