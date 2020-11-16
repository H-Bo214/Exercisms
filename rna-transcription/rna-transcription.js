//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let result = []
  if (!dna) {
    return ''
  }
  else if (dna === 'G') {
    return 'C'
  }
  else if (dna === 'C') {
    return 'G'
  }
  else if (dna === 'T') {
    return 'A'
  }
  else if (dna === 'A') {
    return 'U'
  }
  else {
    dna.split('').forEach(letter => {
      if (letter === 'G') {
        result.push('C')
      }
      if (letter === 'C') {
        result.push('G')
      }
      if (letter === 'T') {
        result.push('A')
      }
      if (letter === 'A') {
        result.push('U')
      }
    })
  }
  let finalResult = result.join('')
  return finalResult
};
