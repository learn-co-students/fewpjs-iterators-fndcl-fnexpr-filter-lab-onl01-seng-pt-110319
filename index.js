// Code your solution here
function findMatching(drivers,name) {
  let result = drivers.filter(driver=>{
    return driver.toLowerCase() === name.toLowerCase();
  });
  return result;
};

function fuzzyMatch(drivers,string) {
  let result = drivers.filter(driver=>{
    return driver.startsWith(string);
  });
  return result;
};

function matchName(drivers,string) {
  let result = drivers.filter(driver=>{
    return driver.name===string;
  });
  return result;
};
