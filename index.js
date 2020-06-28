// Code your solution here
function findMatching(array,string){
let matches =  array.filter(line => {
    return line.toLowerCase() === string.toLowerCase();
})
return matches
}

function fuzzyMatch(array,string){
    return array.filter(line => 
        line.toLowerCase().indexOf(string.toLowerCase()) === 0       
    )
}

function matchName(array,string){
    return array.filter(line => 
        line.name === string)
        
}