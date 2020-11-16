//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// const allColors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

const allColors = {
  black: 0, 
  brown: 1, 
  red: 2, 
  orange: 3, 
  yellow: 4, 
  green: 5, 
  blue: 6, 
  violet: 7,
  grey: 8, 
  white: 9
}

export const decodedValue = (testCase) => {
  if (testCase.length >=3) {
    testCase.splice(2, 1)
  }
  let result = []
  testCase.forEach(test => {
    for (let color in allColors) {
      if (test === color) {
        result.push(String(allColors[color]))
      }
    }
  })
  let final = Number(`${result[0]}${result[1]}`)
  return final 
};



