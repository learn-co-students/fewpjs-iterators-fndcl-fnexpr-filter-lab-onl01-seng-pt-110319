// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter( d => 
        d.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(drivers, name) {
    return drivers.filter( d =>
       d.charAt(0) === name.charAt(0)
        )
}

function matchName(drivers, name) {
    return drivers.filter( d =>
        d.name === name
        )
        
}