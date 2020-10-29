class PTbt1{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    cal(){
        if(this.a == 0) {
            if (this.b == 0) {
                alert("pt vo so nghiem");
            } else {
                alert("pt vo nghiem");
            }
        }else{
            alert(`pt co nghiem la ${(-this.b / this.a).toFixed(2)}`)
        }
    }
    setA(a){
        // let bool;
        a = prompt("Nhap a");
        // do{
        //     bool = false;
        //     a = prompt("Nhap a");
        //     for(let i = 0; i < a.length; i++){
        //         if(parseInt(a.charAt(i)) % 1 != 0){
        //             bool = true;
        //             alert("nhap so");
        //             break;
        //         }
        //     }
        // }while(bool);
        this.a = parseInt(a);
    }
    setB(b){
        // let bool;
        b = prompt("Nhap b");
        // do{
        //     bool = false;
        //     b = prompt("Nhap b");
        //     for(let i = 0; i < b.length; i++){
        //         if(parseInt(b.charAt(i)) % 1 != 0 ){
        //             bool = true;
        //             alert("nhap so");
        //             break;
        //         }
        //     }
        // }while(bool);
        this.b = parseInt(b);
    }
}
let ptb1 = new PTbt1();
ptb1.setA();
ptb1.setB();
ptb1.cal();