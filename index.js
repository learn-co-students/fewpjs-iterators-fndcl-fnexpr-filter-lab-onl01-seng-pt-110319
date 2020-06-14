// Code your solution here

// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match

function findMatching(drivers, names) {

    return drivers.filter(match => {
        return match.toLowerCase() === names.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {

    return drivers.filter(n => {
        return n.charAt(0) === string.charAt(0)
    })

}

function matchName(drivers, string) {

    return drivers.filter(n => {
        return n.name === string
    })
}