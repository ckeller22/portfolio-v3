import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Select from '@radix-ui/react-select';
import React, { ForwardedRef, useState } from 'react';
import { AppProps } from '../../model/props';
import { hexToRgb } from '../../utils/helpers';
import colors, { ColorData } from '../../model/colors';

// interface ColorPickerDropdownProps extends AppProps {}

interface ColorPickerSelectItemProps extends AppProps {
  color: ColorData;
}

const SelectItem = React.forwardRef(
  (props: ColorPickerSelectItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { color } = props;
    return (
      <Select.Item
        ref={ref}
        className="flex items-center px-3 py-2"
        value={color.hexValue}
      >
        <Select.ItemText asChild>
          <button type="button" className="flex flex-row">
            <div
              className="h-6 w-6 rounded-full"
              style={{ backgroundColor: color.hexValue }}
            />
            <div className="ml-2">{color.displayValue}</div>
          </button>
        </Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <FontAwesomeIcon icon={faCheck} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

function ColorPickerDropdown() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColor, setSelectedColor] = useState<ColorData>(colors[0]);

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
      <Select.Trigger asChild>
        <div className="rounded-full bg-white/90 px-3 py-2 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-500 dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400">
          Choose a color!
        </div>
      </Select.Trigger>
      <Select.Content className="bg-white shadow-lg">
        {colors.map((color) => {
          return <SelectItem key={color.hexValue} color={color} />;
        })}
      </Select.Content>
    </Select.Root>
  );
}

SelectItem.displayName = 'SelectItem';

export default ColorPickerDropdown;