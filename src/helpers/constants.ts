export const colorScheme: {
  white: string;
  black: string;
  darkGrey: string;
  veryDarkGrey: string;
} = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
  darkGrey: "hsl(0, 0%, 63%)",
  veryDarkGrey: "hsl(0, 0%, 27%)",
};

export const MEDIA_QUERIES = {
  MOBILE: "@media only screen and (max-width: 486px)",
  TABLET: "@media only screen and (min-width: 486px) and (max-width: 1000px)",
  LAPTOP: "@media only screen and (min-width: 1000px) and (max-width: 1024px)",
  DESKTOP: "@media only screen and (min-width: 1025px) and (max-width: 1200px)",
  TV: "@media only screen and (min-width: 1201px)",
};
