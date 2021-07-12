function findMatching(drivers, string) {
    return drivers.filter(function(d) {
        return d.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) === 0;
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name === string;
    })
}