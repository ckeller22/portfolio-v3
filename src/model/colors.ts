export type ColorData = {
  displayValue: string;
  hexValue: string;
};

export const colors: Array<ColorData> = [
  {
    displayValue: 'Red',
    hexValue: '#ef4444',
  },
  {
    displayValue: 'Orange',
    hexValue: '#f97316',
  },
  {
    displayValue: 'Yellow',
    hexValue: '#eab308',
  },
  {
    displayValue: 'Green',
    hexValue: '#22c55e',
  },
  {
    displayValue: 'Teal',
    hexValue: '#14b8a6',
  },
  {
    displayValue: 'Blue',
    hexValue: '#3b82f6',
  },
  {
    displayValue: 'Violet',
    hexValue: '#8b5cf6',
  },

  {
    displayValue: 'Fuchsia',
    hexValue: '#d946ef',
  },
  {
    displayValue: 'Rose',
    hexValue: '#f43f5e',
  },
];

export const DEFAULT_COLOR = colors[5];
export const LOCAL_STORAGE_COLOR_KEY = 'color';
