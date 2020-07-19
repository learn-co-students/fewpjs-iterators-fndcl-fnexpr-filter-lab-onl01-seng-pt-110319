// Code your solution here
function findMatching(array,string){
   return array.filter(driver=>{
       return driver.toLowerCase()===string.toLowerCase()
   })
   }

   function fuzzyMatch(array,string){
    return array.filter(driver=>{
        return driver.charAt(0)==string.charAt(0)
    })
    }
 
    function matchName(drivers,string){
        return drivers.filter(driver=>{
            return driver.name.toLowerCase()==string.toLowerCase(0)
        })
        }