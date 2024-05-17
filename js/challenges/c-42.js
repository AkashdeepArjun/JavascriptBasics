function createCar(made,model,year,color){

    this.made=made;
    this.model=model;
    this.year=year;
    this.color=color;
    this.started=false;

    this.start=()=>{

        var message=``;
        if(this.started){
            message=`car ${this.made} ${this.model} already running....`;
        }else{
            this.started=true;

            message=`starting car ${this.made} ${this.model}....`

        }

        return message;

    }

    this.stop=()=>{

        var message= ``;
        if(this.started){
            message=` Stopping car ${this.made} ${this.model} `;
            this.started=false;
        }else{

            message=`car ${this.made} ${this.model} already stopped `;

        }

        return message;




    }




}


const car1= new createCar("toyota","TY103",2016,"BLACK");

const car2 = new createCar("nano","potato",2014,"BLUE");

console.log(car1.stop());

console.log(car2.stop());

console.log(car2.start());
console.log(car2.start());
