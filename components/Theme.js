export const theme = {
  colors: {
    bg: '#05070A',
    bgElevated: '#0B0F14',
    surface: '#11161D',
    surfaceAlt: '#0E1319',
    border: '#1B232C',
    borderStrong: '#283341',
    text: '#E6EDF3',
    textDim: '#8B97A5',
    textFaint: '#4F5965',
    primary: '#00E5C7',
    primaryDim: '#0A8C7A',
    primaryGlow: 'rgba(0, 229, 199, 0.35)',
    accent: '#FFB84D',
    danger: '#FF5C6C',
    dangerGlow: 'rgba(255, 92, 108, 0.3)',
    success: '#3FD68A',
    warning: '#FFB84D',
  },
  spacing: (n) => n * 8,
  radius: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 28,
  },
  font: {
    mono: 'SpaceMono',
    sans: 'Inter',
  },
};

export default theme;
