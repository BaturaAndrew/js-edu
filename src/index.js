/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4
  }
) {

  let numberWeeks = 800,
    coefficient = 0;
  for (let key in config) {
    if (focus == key) {
      coefficient = config[key];
      break;
    }
  }
  coefficient = (knowsProgramming) ? coefficient : (coefficient / 1.625);

  return Math.ceil(numberWeeks / coefficient);
};