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
      background: '#fff', // Background color
      mainTextColor: '#000', // Main text color
      headerBackground: 'grey', // Header background color
    },
  },
  light: {
    colors: {
      background: '#000', // Background color
      mainTextColor: '#fff', // Main text color
      headerBackground: '#1f1f1f', // Header background color
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

export const baseTransition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';
