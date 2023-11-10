// Convert a hex color code to an RGB string
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ].join(',')
    : '0,0,0';
}

// Convert RGB color values to a hex color code
function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb.split(',').map(Number);
  const red = r.toString(16).padStart(2, '0');
  const green = g.toString(16).padStart(2, '0');
  const blue = b.toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}

export { hexToRgb, rgbToHex };
