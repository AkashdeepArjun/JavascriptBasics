

const genVehicle=(type,brand,model,year)=>{

    return {
        type,
        brand,
        model,
        year,
        details:function(){
            return `type:${this.type}\nbrand:${this.brand}\nmodel:${this.model}\nyear:${this.year}`
        }
    }
}


const lambo = genVehicle("lambogini","toyota","potato","2019");

console.log(lambo.details());