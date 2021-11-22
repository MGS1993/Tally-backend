const calculateExpense = (expenseObj) => {
  const expenseArray = [];

  expenseObj.forEach((item, index) => {
    expenseArray.push(parseInt(item.cost));
  });

  return expenseArray.reduce((result, item) => {
    return result + item;
  }, 0);
};

module.exports = calculateExpense;
