const saturdayFun = (activity = 'roller-skate') => {return `This Saturday, I want to ${activity}!`}

const mondayWork = (work = 'go to the office') => {return `This Monday, I will ${work}.`}

const wrapAdjective = (wrap = '*') => {
  return (string) => {
    return `You are ${wrap}${string}${wrap}!`;
  }
}

const Calculator = {
  add: ((num1, num2) => {return num1 + num2}),
  subtract: ((num1, num2) => {return num1 - num2}),
  multiply: ((num1, num2) => {return num1 * num2}),
  divide: ((num1, num2) => {return num1 / num2})
}

const actionApplyer = (num, array) => {
  array.forEach(func => {
    num = func(num);
  });
  return num;
}