import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import { hexToRgb } from '../../utils/helpers';
import colors, { ColorData } from '../../model/colors';

function ColorPickerDropdown() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColor, setSelectedColor] = useState<ColorData>(colors[5]);

  const updateCSSVariable = (color: string) => {
    const rgbValue = hexToRgb(color);
    document.documentElement.style.setProperty('--color-primary', rgbValue);
  };

  const handleColorChange = (color: string) => {
    const foundColor = colors.find((c) => {
      return c.hexValue === color;
    });
    if (foundColor) {
      setSelectedColor(foundColor);
      updateCSSVariable(color);
    }
  };

  return (
    <Select.Root onValueChange={handleColorChange}>
      <Select.Trigger className="relative mr-4 rounded-full bg-white/90 px-3 py-2 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90  dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400">
        Theme
      </Select.Trigger>
      <Select.Content
        className="z-10 flex flex-col overflow-hidden rounded-md bg-white py-2 text-sm shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20"
        position="popper"
      >
        {colors.map((color) => {
          return (
            <Select.Item
              key={color.hexValue}
              className="group flex cursor-pointer flex-row items-center justify-between px-4 py-2 hover:bg-zinc-100 hover:text-zinc-800 data-[state=checked]:bg-zinc-100 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-50 dark:data-[state=checked]:bg-zinc-700/90"
              value={color.hexValue}
            >
              <Select.ItemText asChild>
                <button type="button" className="flex flex-row items-center">
                  <div
                    className="h-4 w-4 rounded-md ring-2 ring-zinc-900/5 dark:ring-zinc-300/20"
                    style={{ backgroundColor: color.hexValue }}
                  />
                  <div className="ml-4">{color.displayValue}</div>
                </button>
              </Select.ItemText>
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
}

export default ColorPickerDropdown;
