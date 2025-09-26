import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";

// Components style overrides
import tabs from "./components/tabs";

const overrides = {
  styles,
  breakpoints,
  colors,
  components: {
    tabs,
  },
  fonts: {
    heading: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
};

export default extendTheme(overrides);
