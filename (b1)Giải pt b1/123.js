class PTbt1{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    cal(){
        if(this.a == 0) {
            if (this.b == 0) {
                alert("pt vo nghiem");
            } else {
                alert("pt co nghiem la )");
            }
        }else{
            alert(`pt co nghiem la ${-this.b / this.a}`)
        }
    }
    setA(a){
        a = +prompt("Nhap a");
        this.a = a;
    }
    setB(b){
        b = +prompt("Nhap b");
        this.b = b;
    }
}
let ptb1 = new PTbt1();
ptb1.setA();
ptb1.setB();
ptb1.cal();