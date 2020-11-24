//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 'Sure' if a question
// 'Whoa', chill out!' if all CAPS
// 'Calm down, I know what I'm doing!' if you yell a question ?!
// 'Fine. Be that way!'  if you address w/o saying anything
// 'Whatever.' to anything else

export const hey = (message) => {
  if (message === message.toUpperCase() && !message.includes('?')) {
    return 'Whoa, chill out!'
  } 
  else if (message === message.toUpperCase() && message.includes('?')) {
    return 'Calm down, I know what I\'m doing!' 
  }
  else if (message.includes('?')) {
    return 'Sure.'
  }
  else if (!message.includes('!') || !message.includes('?')) {
    return 'Whatever.'
  }
};
