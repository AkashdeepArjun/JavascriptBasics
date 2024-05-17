

function Counter(){

let _count=50;

this._inc=()=>{
    _count++;
}
this._dec=()=>{
    _count--;
}
this.getCount=()=>_count;

this.red=()=>_dec();

}



const c = new Counter();
c._dec();
console.log(c.getCount());