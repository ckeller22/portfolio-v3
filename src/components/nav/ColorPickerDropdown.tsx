import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Select from '@radix-ui/react-select';
import React, { ForwardedRef, useState } from 'react';
import { AppProps } from '../../model/props';

// interface ColorPickerDropdownProps extends AppProps {}

interface ColorPickerSelectItemProps extends AppProps {
  value: string;
}

const SelectItem = React.forwardRef(
  (props: ColorPickerSelectItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { value } = props;
    return (
      <Select.Item
        ref={ref}
        className="flex items-center px-3 py-2"
        value={value}
      >
        <Select.ItemText>{value}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <FontAwesomeIcon icon={faCheck} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

function ColorPickerDropdown() {
  const [selectedColor, setSelectedColor] = useState('59,130,246'); // initial state

  // Function to update the CSS variable
  const updateCSSVariable = (color: string) => {
    // Set the CSS variable on the root element
    document.documentElement.style.setProperty('--color-primary', color);
  };

  // Call this function when the color is selected or changed
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    updateCSSVariable(color);
  };

  return (
    <Select.Root onValueChange={handleColorChange}>
      <Select.Trigger asChild>
        <div className="rounded-full bg-white/90 px-3 py-2 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-500 dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400">
          Choose a color!
        </div>
      </Select.Trigger>
      <Select.Content className="bg-white">
        <SelectItem value="239,68,68">Red</SelectItem>
        <SelectItem value="59,130,246">Blue</SelectItem>
        <SelectItem value="249,115,22">Orange</SelectItem>
      </Select.Content>
    </Select.Root>
  );
}

SelectItem.displayName = 'SelectItem';

export default ColorPickerDropdown;
