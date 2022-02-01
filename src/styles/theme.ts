import { CustomTheme } from 'styled-components';

export const theme: CustomTheme = {
  default: {
    textColor: '#242424',
  },
  dark: {
    textColor: '#ffffff',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: '@media (max-width: 1440px)',
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 576px)',
};
