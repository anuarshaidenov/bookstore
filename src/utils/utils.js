/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
const executeAfterTime = (functionToExecute, param, time) =>
  setTimeout(() => functionToExecute(param), time);

export default executeAfterTime;
