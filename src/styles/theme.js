export const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  nottabletanddesktop: '767px',
  tablet: '768px',
  desktop: '1440px',
  notdesktop: '1439px',
};

export const theme = Object.freeze({
  dark: {
    name: 'dark',
    colors: {
      background: '#151a31', // Background color
      mainTextColor: '#fff', // Main text color
      accentTextColor:
        'linear-gradient(109.8deg,rgba(62, 5, 116, 1) -5.2%,rgba(41, 14, 151, 1) -5.2%,rgba(216, 68, 148, 1) 103.3%)', // Accent text color
      notMainBackground: '#0a0e25', // Background color of header, footer
      scrollTopIconFill: '#fff', // ScrollTop icon fill color
      projectOverlayBgd: 'rgba(0, 0, 0, 0.6)', // Project overlay background color
      particlesColor: '#fff', // Color of particles circles
      footerElementsBgd: 'rgba(255, 255, 255, 0.1)', // Background color of footer icons and location
      footerElementsHover: 'rgba(255, 255, 255, 0.2)', // Hover color of footer icons
      scrollTopBgd: '#474380', // Background color of scroll top btn
      mainShadow:
        '-4px 4px 8px 0px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.3), 0px 1px 10px 0px rgba(255, 255, 255, 0.3)', // Main shadow effect
    },
  },
  light: {
    name: 'light',
    colors: {
      background: 'rgb(252, 253, 234)', // Background color
      mainTextColor: '#000', // Main text color
      accentTextColor:
        'radial-gradient(circle farthest-corner at 10% 20%,rgba(253, 203, 50, 1) 0%,rgba(244, 56, 98, 1) 100.2%)', // Accent text color
      notMainBackground: 'rgb(61, 112, 65)', // Background color of header, footer
      scrollTopIconFill: '#fff', // ScrollTop icon fill color
      projectOverlayBgd: 'rgba(0, 0, 0, 0.4)', // Project overlay background color
      particlesColor: 'rgb(55, 90, 27)', // Color of particles circles
      footerElementsBgd: 'rgba(0, 0, 0, 0.1)', // Background color of footer icons and location
      footerElementsHover: 'rgba(0, 0, 0, 0.2)', // Hover color of footer icons
      scrollTopBgd: 'rgb(41, 90, 45)', // Background color of scroll top btn
      mainShadow:
        '-4px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)', // Main shadow effect
    },
  },
});

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}`,
  mobile: `min-width: ${sizes.mobile}`,
  nottabletanddesktop: `max-width: ${sizes.nottabletanddesktop}`,
  tablet: `min-width: ${sizes.tablet}`,
  desktop: `min-width: ${sizes.desktop}`,
  notdesktop: `max-width: ${sizes.notdesktop}`,
  retina: 'min-device-pixel-ratio: 2',
};

export const baseTransition = '350ms cubic-bezier(0.4, 0, 0.2, 1)';
