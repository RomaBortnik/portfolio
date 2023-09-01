export const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
  notdesktop: '1439px',
};

export const theme = Object.freeze({
  dark: {
    colors: {
      background: '#000', // Background color
      mainTextColor: '#fff', // Main text color
      accentTextColor:
        'linear-gradient(109.8deg,rgba(62, 5, 116, 1) -5.2%,rgba(41, 14, 151, 1) -5.2%,rgba(216, 68, 148, 1) 103.3%)', // Accent text color
      headerBackground: '#1f1f1f', // Header background color
      scrollTopIconFill: '#fff', // ScrollTop icon fill color
    },
  },
  light: {
    colors: {
      background: '#fff', // Background color
      mainTextColor: '#000', // Main text color
      accentTextColor:
        'radial-gradient(circle farthest-corner at 10% 20%,rgba(253, 203, 50, 1) 0%,rgba(244, 56, 98, 1) 100.2%)', // Accent text color
      headerBackground: '#e6daf7', // Header background color
      scrollTopIconFill: '#fff', // ScrollTop icon fill color
    },
  },
});

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}`,
  mobile: `min-width: ${sizes.mobile}`,
  tablet: `min-width: ${sizes.tablet}`,
  desktop: `min-width: ${sizes.desktop}`,
  notdesktop: `max-width: ${sizes.notdesktop}`,
  retina: 'min-device-pixel-ratio: 2',
};

export const baseTransition = '350ms cubic-bezier(0.4, 0, 0.2, 1)';
