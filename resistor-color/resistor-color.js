//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (test) => {
  let result = 0;
  if (test === COLORS) {
    return COLORS
  } else if (test !== COLORS) {
    COLORS.forEach((color, index) => {
      if (color === test) {
        result = index
      }
    })
  }
  return result
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
