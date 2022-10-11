const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};
export const device = {
  maxMobile: `(max-width: ${size.mobile})`,
  Mobile: `(min-width: ${size.mobile})`,
  maxTablet: `(max-width: ${size.tablet})`,
  Tablet: `(min-width: ${size.tablet})`,
  maxLaptop: `(max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop})`,
  maxDesktop: `(max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
