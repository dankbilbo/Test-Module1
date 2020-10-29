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
        a = prompt("Nhap a");
        this.a = parseInt(a);
    }
    setB(b){
        b = prompt("Nhap b");
        this.b = parseInt(b);
    }
}
let ptb1 = new PTbt1();
ptb1.setA();
ptb1.setB();
ptb1.cal();