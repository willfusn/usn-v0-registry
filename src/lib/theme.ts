// @ts-nocheck
import { alpha, createTheme } from "@mui/material/styles";

const fontPrimary = '"Roboto", Helvetica Neue, Helvetica, sans-serif';
const fontSecondary = '"Montserrat", Helvetica Neue, Helvetica, sans-serif';
const fontWeightSemiBold = 600;

let theme = createTheme({
  palette: {
    type: "light",
    // standard MUI palette customization. defines colors for material
    // buttons, forms, text, etc.
    // See also: https://mui.com/material-ui/customization/palette/
    primary: {
      main: "#1263D3",
      light: "#6AB4F4",
      dark: "#064AB7",
    },
    secondary: {
      main: "#CE2927",
      light: "#F58987",
      dark: "#A4211F",
    },
    error: {
      main: "#B92523",
      light: "#EB625F",
      dark: "#871A18",
    },
    warning: {
      main: "#E89A00",
      light: "#F1B303",
      dark: "#C94D00",
    },
    info: {
      main: "#6AB4F4",
      light: "#B1DCFB",
      dark: "#358CE7",
    },
    dark: {
      main: "#80828A",
      dark: "#41444F",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#2C303C",
      secondary: "#515767",
    },
    // custom color variables added here for convenient access
    dividerLight: "#0277BD",

    // Our full color palette:
    colors: {
      // Neutrals
      black90: "#1A1D26",
      black80: "#2C303C",
      black70: "#3F4451",

      gray50: "#515767",
      gray30: "#6F7480",
      gray20: "#9297A1",
      gray15: "#D3D7DC",
      gray10: "#E4E7EB",
      gray05: "#F4F7F9",

      white00: "#ffffff",

      // Reds
      red90: "#871A18",
      red80: "#A4211F",
      red70: "#B92523",
      red50: "#CE2927",
      red30: "#EB625F",
      red20: "#F58987",
      red15: "#FCBAB9",
      red10: "#FDD5D4",
      red05: "#FFF0EF",

      // Oranges and Yellows
      orange90: "#C94D00",
      orange80: "#DD7E00",
      orange70: "#E89A00",

      yellow50: "#F1B303",
      yellow30: "#F7CE27",
      yellow20: "#FBE25C",
      yellow15: "#FEF2A0",
      yellow10: "#FEF8C6",
      yellow05: "#FFFDEB",

      // Greens
      green90: "#024024",
      green80: "#005E31",
      green70: "#06844B",
      green50: "#24BB80",
      green30: "#38D38D",
      green20: "#97EFB2",
      green15: "#C4F9D6",
      green10: "#DBFBE8",
      green05: "#F0FFEF",

      // Blues
      blue90: "#00206B",
      blue80: "#033493",
      blue70: "#064AB7",
      blue50: "#1263D3",
      blue30: "#358CE7",
      blue20: "#6AB4F4",
      blue15: "#B1DCFB",
      blue10: "#D6EEFD",
      blue05: "#EFF8FF",
      blue01: "#F8FCFF",

      // Violet
      violet90: "#240C33",
      violet80: "#3D1455",
      violet70: "#512386",
      violet50: "#5A37AE",
      violet30: "#624FCC",
      violet20: "#7D79DF",
      violet15: "#97A3F1",
      violet10: "#C7D4FA",
      violet05: "#E9EEFC",

      // Brandfuse
      brandfuse: "#2A75C0",

      // Social Media
      facebook: "#3C5A99",
      twitter: "#1DA1F2",
      reddit: "#FF4500",
      linkedin: "#0077B5",
      instagram: "#833AB4",
      flipboard: "#F52828",
      youtube: "#FF0000",
    },
  },
  typography: {
    fontFamily: fontPrimary,
    h1: {
      fontFamily: fontSecondary,
      fontSize: "2.625rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.14,
    },
    h2: {
      fontFamily: fontSecondary,
      fontSize: "2rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: fontSecondary,
      fontSize: "1.5rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.33,
    },
    h4: {
      fontFamily: fontSecondary,
      fontSize: "1.125rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.33,
    },
    h5: {
      fontFamily: fontSecondary,
      fontSize: "1rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    h6: {
      fontFamily: fontSecondary,
      fontSize: "0.75rem",
      fontWeight: fontWeightSemiBold,
      letterSpacing: 0,
      lineHeight: 1.33,
    },
    body1: {
      fontFamily: fontPrimary,
      fontWeight: 400,
      fontSize: "1rem", // 16px
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: fontPrimary,
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
      lineHeight: 1.43,
    },
    body3: {
      fontFamily: fontPrimary,
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      lineHeight: 1.43,
    },
    button: {
      fontSize: "1rem",
      letterSpacing: 0,
      textTransform: "none", // Overriding default of uppercase
    },
    overline: {
      fontSize: "0.75rem",
      letterSpacing: "1px",
      lineHeight: 1,
    },
    // custom variables included for convenient access
    fontPrimary: fontPrimary,
    fontSecondary: fontSecondary,
    fontWeightSemiBold: fontWeightSemiBold,
    fontWeightBlack: 900,
  },
  spacing: [
    // based on components/styles/scales/margin.js
    "0rem", // 0    0px
    "0.125rem", // 1    2px
    "0.25rem", // 2    4px
    "0.5rem", // 3    8px
    "1rem", // 4    16px
    "2rem", // 5    32px
    "4rem", // 6    64px
    "8rem", // 7    128px
  ],
  breakpoints: {
    // based on https://code.usnews.com/its/atlas-core/-/blob/main/src/enum/breakpoint.js
    values: {
      sm: 0,
      md: 640,
      ml: 768,
      lg: 1024,
      xl: 1264,
    },
  },
  shape: {
    // Scaling factor for sx: borderRadius, and the default radius of
    // Paper, in pixels.
    borderRadius: 4,
  },
  zIndex: {
    // For navigation/headers/SearchBar, which is sticky on mobile
    // To avoid the issue noted in PLAT-2074 (login modal showing behind
    // the search bar), this is set below that modal's z-index of 1000.
    // https://code.usnews.com/its/atlas-core/-/blob/89cbb72603eee601b1db774cdb3c832de1695ad4/src/modals/panel-modal/index.js#L9
    searchBar: 800,
    authModal: 1600,
    stickyPopup: 1700,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          // Ensure that contained buttons used as links retain white text
          "&:link, &:visited": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
});

// PLAT-2229 Use gray50 instead of black for shadows.
// Only the color is different from the default:
// https://mui.com/material-ui/customization/default-theme/
const shadowColors = [
  alpha(theme.palette.colors.gray50, 0.2),
  alpha(theme.palette.colors.gray50, 0.14),
  alpha(theme.palette.colors.gray50, 0.12),
];

theme = createTheme(theme, {
  palette: {
    action: {
      active: alpha(theme.palette.colors.black80, 0.6),
      hover: alpha(theme.palette.colors.black80, 0.04),
      selected: alpha(theme.palette.colors.black80, 0.08),
      focus: alpha(theme.palette.colors.black80, 0.12),
      disabled: alpha(theme.palette.colors.black80, 0.38),
      disabledBackground: alpha(theme.palette.colors.black80, 0.12),
    },
  },
  shadows: [
    "none",
    `0px 2px 1px -1px ${shadowColors[0]},0px 1px 1px 0px ${shadowColors[1]},0px 1px 3px 0px ${shadowColors[2]}`,
    `0px 3px 1px -2px ${shadowColors[0]},0px 2px 2px 0px ${shadowColors[1]},0px 1px 5px 0px ${shadowColors[2]}`,
    `0px 3px 3px -2px ${shadowColors[0]},0px 3px 4px 0px ${shadowColors[1]},0px 1px 8px 0px ${shadowColors[2]}`,
    `0px 2px 4px -1px ${shadowColors[0]},0px 4px 5px 0px ${shadowColors[1]},0px 1px 10px 0px ${shadowColors[2]}`,
    `0px 3px 5px -1px ${shadowColors[0]},0px 5px 8px 0px ${shadowColors[1]},0px 1px 14px 0px ${shadowColors[2]}`,
    `0px 3px 5px -1px ${shadowColors[0]},0px 6px 10px 0px ${shadowColors[1]},0px 1px 18px 0px ${shadowColors[2]}`,
    `0px 4px 5px -2px ${shadowColors[0]},0px 7px 10px 1px ${shadowColors[1]},0px 2px 16px 1px ${shadowColors[2]}`,
    `0px 5px 5px -3px ${shadowColors[0]},0px 8px 10px 1px ${shadowColors[1]},0px 3px 14px 2px ${shadowColors[2]}`,
    `0px 5px 6px -3px ${shadowColors[0]},0px 9px 12px 1px ${shadowColors[1]},0px 3px 16px 2px ${shadowColors[2]}`,
    `0px 6px 6px -3px ${shadowColors[0]},0px 10px 14px 1px ${shadowColors[1]},0px 4px 18px 3px ${shadowColors[2]}`,
    `0px 6px 7px -4px ${shadowColors[0]},0px 11px 15px 1px ${shadowColors[1]},0px 4px 20px 3px ${shadowColors[2]}`,
    `0px 7px 8px -4px ${shadowColors[0]},0px 12px 17px 2px ${shadowColors[1]},0px 5px 22px 4px ${shadowColors[2]}`,
    `0px 7px 8px -4px ${shadowColors[0]},0px 13px 19px 2px ${shadowColors[1]},0px 5px 24px 4px ${shadowColors[2]}`,
    `0px 7px 9px -4px ${shadowColors[0]},0px 14px 21px 2px ${shadowColors[1]},0px 5px 26px 4px ${shadowColors[2]}`,
    `0px 8px 9px -5px ${shadowColors[0]},0px 15px 22px 2px ${shadowColors[1]},0px 6px 28px 5px ${shadowColors[2]}`,
    `0px 8px 10px -5px ${shadowColors[0]},0px 16px 24px 2px ${shadowColors[1]},0px 6px 30px 5px ${shadowColors[2]}`,
    `0px 8px 11px -5px ${shadowColors[0]},0px 17px 26px 2px ${shadowColors[1]},0px 6px 32px 5px ${shadowColors[2]}`,
    `0px 9px 11px -5px ${shadowColors[0]},0px 18px 28px 2px ${shadowColors[1]},0px 7px 34px 6px ${shadowColors[2]}`,
    `0px 9px 12px -6px ${shadowColors[0]},0px 19px 29px 2px ${shadowColors[1]},0px 7px 36px 6px ${shadowColors[2]}`,
    `0px 10px 13px -6px ${shadowColors[0]},0px 20px 31px 3px ${shadowColors[1]},0px 8px 38px 7px ${shadowColors[2]}`,
    `0px 10px 13px -6px ${shadowColors[0]},0px 21px 33px 3px ${shadowColors[1]},0px 8px 40px 7px ${shadowColors[2]}`,
    `0px 10px 14px -6px ${shadowColors[0]},0px 22px 35px 3px ${shadowColors[1]},0px 8px 42px 7px ${shadowColors[2]}`,
    `0px 11px 14px -7px ${shadowColors[0]},0px 23px 36px 3px ${shadowColors[1]},0px 9px 44px 8px ${shadowColors[2]}`,
    `0px 11px 15px -7px ${shadowColors[0]},0px 24px 38px 3px ${shadowColors[1]},0px 9px 46px 8px ${shadowColors[2]}`,
  ],
  typography: {
    disclaimer: {
      color: theme.palette.colors.gray50,
      fontStyle: "italic",
      fontSize: "0.75rem",
      lineHeight: 1.33,
    },
  },
});

export default theme;
