//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let gigaSec = 1000000000
  let parsedDate = Date.parse(date)
  let total =  parsedDate + gigaSec
  let result = new Date(total)
  console.log('total', Date.UTC(result))

};
