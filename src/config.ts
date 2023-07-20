// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Anthony Gerardo Giuliano";
export const SITE_DESCRIPTION =
  "Welcome to my dev Portfolio and Blog! I write about modern web development and cybersecurity";
export const TWITTER_HANDLE = "@Anthony091_";
export const MY_NAME = "Anthony Gerardo Giuliano";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
