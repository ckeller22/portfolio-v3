import * as Select from '@radix-ui/react-select';
import { useCallback, useEffect, useState } from 'react';
import { hexToRgb } from '../../utils/helpers';
import {
  ColorData,
  DEFAULT_COLOR,
  LOCAL_STORAGE_COLOR_KEY,
  colors,
} from '../../model/colors';

function ColorPickerDropdown() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColor, setSelectedColor] = useState<ColorData>(DEFAULT_COLOR);

  const updateCSSVariable = (color: string) => {
    const rgbValue = hexToRgb(color);
    document.documentElement.style.setProperty('--color-primary', rgbValue);
  };
  const updateSelectedColor = useCallback((colorData: ColorData) => {
    localStorage.setItem(LOCAL_STORAGE_COLOR_KEY, JSON.stringify(colorData));
    setSelectedColor(colorData);
    updateCSSVariable(colorData.hexValue);
  }, []);

  useEffect(() => {
    const localStorageColor = localStorage.getItem(LOCAL_STORAGE_COLOR_KEY);
    let colorData: ColorData;

    if (!localStorageColor) {
      updateSelectedColor(DEFAULT_COLOR);
      return;
    }

    try {
      colorData = JSON.parse(localStorageColor);
      updateSelectedColor(colorData);
    } catch (e) {
      updateSelectedColor(DEFAULT_COLOR);
      return;
    }

    updateSelectedColor(colorData);
  }, [updateSelectedColor]);

  const handleColorChange = (color: string) => {
    const foundColor = colors.find((c) => {
      return c.hexValue === color;
    });
    if (foundColor) {
      updateSelectedColor(foundColor);
    }
  };

  return (
    <Select.Root
      onValueChange={handleColorChange}
      value={selectedColor.hexValue}
    >
      <Select.Trigger className="group relative mr-4 rounded-md bg-white/90 px-3 py-2 shadow-md ring-1 ring-zinc-900/5 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90  dark:text-zinc-200 dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400">
        <span className="text-md group-hover:text-skin-primary font-medium">
          Theme
        </span>
      </Select.Trigger>
      <Select.Content className="data-[state=open]:animate-fadeIn z-10 flex flex-col overflow-hidden rounded-md bg-white py-2 text-sm shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20">
        {colors.map((color) => {
          return (
            <Select.Item
              key={color.hexValue}
              className="group flex cursor-pointer flex-row items-center px-4 py-2 hover:bg-zinc-100 hover:text-zinc-800 data-[state=checked]:bg-zinc-100 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-50 dark:data-[state=checked]:bg-zinc-700/90"
              value={color.hexValue}
            >
              <div
                className="h-4 w-4 rounded-md ring-2 ring-zinc-900/5 dark:ring-zinc-300/20"
                style={{ backgroundColor: color.hexValue }}
              />
              <div className="ml-4">{color.displayValue}</div>
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
}

export default ColorPickerDropdown;
