const theme = {
    colors: {
        red1: '#ff0101',
        red2: '#e60000',
        grey1: '#282d30',
        grey2: '#20253a',
        grey3: '#74798c',
        cardBg: '#fbfbfb',
    },
    breakpoints: {
        phone: '767px',
        desktop: '992px',
    },
    font: {
        family: 'Roboto, sans-serif',
    },
};

export default theme;

export type Theme = typeof theme;
