// theme/index.js
import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import styles from "./styles"
// Component style overrides
import Button from "./components/button";
const overrides = {
    styles,

    // Other foundational style overrides go here
    components: {
        Button,
        // Other components go here
    },
    fonts: {
        heading: "CeraProBold",
        body: `Cantarell, Roboto , Ubuntu ,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    colors: {
        brand: {
            100: "#319EF6",
        },
        darkBg: {
            100: "#213345",
        },
        lightBg: {
            100: "#EBF6FE",
            200: "#F2F5F8"
        },
        gray: {
            100: '#DCE6EF',
            200: '#666666'
        }
    },
};
export default extendTheme(overrides)