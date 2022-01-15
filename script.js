const a = [1, 2, 3, 1, 2, 5];
const removeDublicateValues = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDublicateValues(a));

const a1 = [1, 2];
const b = [2, 3];

const createUniqueValueArray = (firstArr, secondArr) => {
  const result = [];
  firstArr.forEach((element) => {
    if (secondArr.includes(element)) result.push(element);
  });
  return result;
};

console.log(createUniqueValueArray(a1, b));

const obj = { a: { b: [] } };

const deepCheckObjIsHasEmptyValue = (checkObj) => {
    

  function getFiniteValue(obj) {
    let res;
    getProp(obj);
    function getProp(o) {
      for (var prop in o) {
        if (typeof o[prop] === "object") {
          getProp(o[prop]);
        } else {
          res =  o[prop];
        }
      }
    }
    return res;
  };

  if (Object.keys(checkObj).length === 0) {
    return true;
  } else {
    return (
      getFiniteValue(obj) === [] ||
      getFiniteValue(obj) === {} ||
      getFiniteValue(obj) === null ||
      getFiniteValue(obj) === undefined ||
      getFiniteValue(obj) === NaN
    )
  }
};
console.log(deepCheckObjIsHasEmptyValue(obj));
