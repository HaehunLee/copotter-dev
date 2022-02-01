import 'styled-components';

declare module 'styled-components' {
  export interface CustomTheme {
    default: {
      textColor: string;
    };
    dark: {
      textColor: string;
    };
  }
}
