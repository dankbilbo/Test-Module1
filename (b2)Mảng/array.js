class Arr{
    constructor(array) {
       this.array = array
    }
    findIndex(element){
        for(let i = 0; i < this.array.length; i++){
            if(element == this.array[i]){
                return i;
            }
        }
    }
    enterArray(arr){
        this.array = arr;
    }
}
let arr =  new Arr();
arr.enterArray([1, 2, 3, 4]);
let index = arr.findIndex(1);
console.log(index);
