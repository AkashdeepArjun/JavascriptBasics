const count10=(signal=false)=>{      //default value to parameter
    if(signal===true){
        for(i=1;i<=10;i++){
            console.log(i);
        }
    }else{
        console.log("did not run coz false option was set");
    }
};

count10(true);
