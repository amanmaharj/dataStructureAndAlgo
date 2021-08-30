//show the given words are pallendrome
let word = 'racecar'

let letters = []

let rword = ''

for(i=0; i < word.length; i++){
    letters.push(word[i])
}

for(i=0; i< word.length; i++){
    rword += letters.pop();
}

if(word === rword){
    //using the template literal(string)
    console.log(`${word} is a given words that are pallindrome`)
    // console.log(word +' is the given words are pallindrome')
}
else{
    console.log(`${word} is a given words that are not pallindrome`)
}


var Stack = function(){
    this.count = 0
    this.storage =  {}

    //add a value to this account
    this.push = function(value){
    //key-value pair is used to access the object but when you want to access the key that changes frequently then we can access as this.storage[this.count]
        this.storage[this.count] = value
        this.count++
    }

    //removes and return the value of the stack
    this.pop = function(){
        if(this.count===0){
            return undefined
        }
    //this.count is the length and the last element is always at 1 short of the length of the array
        this.count--;
        var result = this.storage[this.count]

        delete this.storage[this.count]

        return result
    }
//return the size of the array
    this.size = function(){
        return this.count
    }


//return the last element of the array
    this.peek = function(){
        return this.storage[this.count-1]
    }
    
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
