import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
    fontFamily: 'effra-cc, sans-serif',
    headings: {
        fontFamily: 'effra-cc, sans-serif',
        sizes: {
            h1: {
                fontWeight: 600, fontSize: 32, lineHeight: 1.4
            }
        }
    },
    breakpoints: {
        sm: 800,
    },
    colors: {
        rhoPurple: [
            "#EFECF8",
            "#D1CAEC",
            "#B3A9E0",
            "#9881F3",
            "#7865C8",
            "#634dbf",
            "#483696",
            "#362871",
            "#241B4B",
            "#120D26"
        ]
    },
    primaryColor: 'rhoPurple',
    primaryShade: {
        light: 5,
        dark: 3
    },
}

export default theme;
