// Code your solution here
function findMatching(drivers, target) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === target.toLowerCase();
    })
}

function fuzzyMatch(drivers, target) {
    return drivers.filter(driver => {
        return driver.substring(0, target.length) === target;
    })
}

function matchName(drivers, target) {
    return drivers.filter(driver => {
        return driver.name === target;
    })
}