//binary search tree
//creating the new class for creating the node.
class Node{
    constructor(data, left=null, right=null){
        this.left = left
        this.right = right
        this.data = data
    }
}

//creating the new class for creating the Binary Search tree
class Bst{
    constructor(){
       this.root = null 
    }

    add(data){
        let node = this.root
        if(node === null){
           this.root = new Node(data)
            return
        }
        else{
            const searchTree = function(node){
                if(node.data > data ){
                    if(node.left === null){
                        node.left = new Node(data)
                        return
                    }
                    else if(node.left !== null){
                        searchTree(node.left)
                        return
                    }  
                }
                
                else if(node.data < data){
                    if(node.right === null){
                        node.right = new Node(data)
                        return
                    }
                    else if(node.right !== null){
                        searchTree(node.right)
                        return
                    }
                }
                else{
                    return null
                }
                
            };
            return searchTree(node)
            
        }
       
    }

    findMin(){
       let current = this.root
        while(current.left !== null){
            current = current.left
        }
        return current.data
    }
    findMax(){
        let current = this.root
        while(current.right!==null){
            current = current.right
        }
        return current.data
    }

    isPresent(data){
        let current = this.root
        while(current){
            if(current.data === data){
                return true
            }
            if(current.data > data){
                return current = current.left
            }
            else{
                return current = current.right
            }
        }
        return false
    }

    

}




