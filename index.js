function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver[0].toUpperCase() === name[0].toUpperCase());
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}