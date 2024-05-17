


class Developer{


        constructor(name,income,skills){
                this.name=name;
                var _income=income;
                var _skills=skills;

        }

        details=()=>{

                return `name:${this.name}\nincome:${this._income}`;

        }

        _doubleIncome=()=>{
                this._income*=2;

                return `income changed to ${this._income}`;
        
        }



        increment = ()=>this._doubleIncome();



}

const developer = new Developer("akash",18000,"java kotlin DSA");


console.log(developer._doubleIncome());