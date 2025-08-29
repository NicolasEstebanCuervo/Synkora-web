export const theme = {
    colors: {
        background: {
            primary: "#151515",
            secondary: "#1e1e1e",
            tertiary: "#252525",
            quaternary: "#e1e1e1",
        error:"#ff4d4d"        },
        text: {
            primary: "#e1e1e1",
            secondary: "#ababab",
            textDark: "#1e1e1e",
        },
        border: {
            primary: "#474747",
            secondary: "#e1e1e1",
        },
        checkbox: {
            active: "#797979",
            inactive: "#1e1e1e",
        },
    },
};

declare module "@emotion/react" {
    export interface Theme {
        colors: {
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                error: string;
            };
            text: {
                primary: string;
                secondary: string;
                textDark: string;
            };
            border: {
                primary: string;
                secondary: string;
            };
            checkbox: {
                active: string;
                inactive: string;
            };
        };
    }
}
