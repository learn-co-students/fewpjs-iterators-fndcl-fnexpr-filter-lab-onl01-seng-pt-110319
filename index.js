// Code your solution here
function findMatching(drivers,name) {
	let matchingDrivers = drivers.filter(driver => {
		return driver.toLowerCase() === name.toLowerCase()
	})
	return matchingDrivers
}

function fuzzyMatch(drivers,name) {
	let matchingDrivers = drivers.filter(driver => {
		return driver.charAt(0) === name.charAt(0)
	})
	return matchingDrivers
}

function matchName(drivers,name) {
	let matchingDrivers = drivers.filter(driver => {
		return driver.name === name
	})
	return matchingDrivers
}