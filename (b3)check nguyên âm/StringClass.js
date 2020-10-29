class String{
    constructor(str) {
        this.str = str;
    }
    check(charArr){
        let count = 0;
        for(let i = 0; i < charArr.length; i++){
            for(let j = 0; j < this.str.length; j++){
                if(this.str.charAt(j) == charArr[i]){
                    count ++;
                }
            }
        }
        if(count == 0){
            return false;
        }
        return count;
    }
    getString(){
        return this.str;
    }
    setString(str){
        this.str = str;
    }
}
let str = new String();
str.setString("nghia");
let num = str.check(["a", "o", "e", "u", "i"]);
console.log(num);
alert(`so ki tu nguyen am cua chuoi "${str.getString()}" la ${num}`);
str.setString("java core");
num = str.check(["a", "o", "e", "u", "i"]);
alert(`so ki tu nguyen am cua chuoi "${str.getString()}" la ${num}`);