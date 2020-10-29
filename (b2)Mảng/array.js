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
        return `${element} khong nam trong mang`;
    }
    enterArray(arr){
        this.array = arr;
    }
}
let arr =  new Arr();
arr.enterArray([1, 2, 3, 4]);
let index1 = arr.findIndex(1);
let index2 = arr.findIndex(0);
console.log(index1);
console.log(index2);
