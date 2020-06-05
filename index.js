function findMatching(drivers, x) {
  return drivers.filter( match =>
    match.toLowerCase() === x.toLowerCase()
  )
}

function fuzzyMatch(drivers, x) {
  return drivers.filter( match =>
    match.toLowerCase().indexOf(x.toLowerCase()) === 0
  )
}

function matchName(drivers, x) {
  return drivers.filter( record => record.name === x)
}
