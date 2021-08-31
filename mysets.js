function mySets(){
    //collection is an array
    let collection = []
    //this function will check for the presence of the element and return true or false
    this.has = function(element){
        return collection.indexOf(element) !== -1
    }


    //this funcion will return the total value of the collection
    this.values = function(){
        return collection;
    }
    //this method will add the element in a sets
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true
        }
        return false
    }
    //remove the element form the collection
    this.remove = function(element){
        //check whether the element is in the collection by calling the method this.has 
        if(this.has(element)){
            //we need to find the index of element
            let index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
        return false
    }
    //return the size of the collection
    this.size = function(){
        return collection.length
    }
    //this method will return the union of two set
    this.union = function(otherset){
        let unionSet = new mySets();
        firstSet = this.values()
        
        // secondSet = otherset.values()

        
        firstSet.forEach(function(eachValue){
            unionSet.add(eachValue)
        })
        otherset.forEach(function(eachValue){
            unionSet.add(eachValue)
        })
        console.log(unionSet.values())
        return unionSet
        

    }
    //this will give you the common element (intersection of the element)
    this.intersection = function(otherSet){
        intersectionSet = new mySets()
        firstSet = this.values()

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
            
        })
        return intersectionSet
    }
//this method is mostly used to get the element which are different from each other
    this.different = function(otherSet){
        differentSet = new mySets()
        firstSet = this.values()

        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differentSet.add(e)
            }
        })
        return differentSet
    }
    //this will give you the subset of two set
    this.subset = function(otherSet){
        let firstSet = this.values()
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }

} 

var setA = new mySets();
var setB = new mySets();

setA.add('a')
setB.add('a')
setA.add('b')
setB.add('c')

console.log(setA.subset(setB))







