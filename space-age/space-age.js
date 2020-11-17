
export const age = (planet, timeInSeconds) => {
  let result;
  const planets = {
    earth: 31557600,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  for (let key in planets) {
    if (planet === 'earth') {
      result = Number(parseFloat(timeInSeconds / planets[key]).toFixed(2))
      return result
    }
    else if (planet === key) {
      return Number(parseFloat((timeInSeconds/planets.earth) / planets[key]).toFixed(2))
    }
  }
};
