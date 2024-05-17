let developer={

    info:function(){
        return `id:${this.id}\nrating:${this.rating}`
    }

}


const ways=["obj_proto_","obj.constructor.prototype","obj,getprototypeof"];

const akash=Object.create(developer,{
    id:{value:364},
    rating:{value:823}
})

// console.log(akash);

console.log(ways[0],akash.__proto__);

console.log(ways[1],akash.constructor.prototype);

console.log(ways[2],Object.getPrototypeOf(akash));