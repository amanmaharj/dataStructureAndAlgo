function Queue(){
    let collection = []
    this.enqueue = function(element){
        return collection.push(element)
    }
    this.dequeue = function(){
        return collection.shift()
    }
    this.front = function(){
        return collection[0]
    }
    this.isEmpty = function(){
        return collection.length === 0
    }
    this.size = function(){
        return collection.length
    }
    this.print = function(){
        console.log(collection) 
    }
}

var q = new Queue()

q.enqueue('Aman')
q.enqueue('Ajay')
q.enqueue('Rita')
q.print()
q.dequeue()
q.print()
//gives you save the element according to the priority i.e. element be ['alex',1] or ['berna',3]
function priority(){
    let collection = []
    this.print = function(){
        console.log(collection)
    }
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }
        else{
            let added = false
        for(i=0;i<collection.length;i++){
            
            if(collection[i][1]>element[1]){
                collection.splice(i,0,element)
                //it checked the condition and added then it flag the added to true
                added = true
                break
            }
        }
        //added is false still
        if(!added){
            collection.push(element)
        }

        }
        //this added flag is used to see whether it has been added or not which save time.
        
    }
    this.dequeue = function(){
        return collection.shift()

    }
    this.isEmpty = function(){
        return collection.length === 0
    }
}
