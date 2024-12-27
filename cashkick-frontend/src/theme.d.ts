import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      purple: string;
      skyBlue: string;
      yellow: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      lightGreen: string;
      darkRed: string;
      yellow: string;
    };
  }
}
