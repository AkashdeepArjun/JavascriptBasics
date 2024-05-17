

const getUserDataFromDb =(name,callback)=>{

    setTimeout(()=>{
        console.log('fetching userdata');
        console.log(callback(name));
    },2000);

}

const returnInfo = (name)=>`${name} is a developer nad UI UX designer`;

const getHobbies=(name)=>`${name} like coding challenges`;


const getUserHobbies =(name,callback)=>{

    setTimeout(()=>{
        console.log('fetching userhobbies');
        console.log(callback(name));
    },2000);

}
getUserHobbies("akashdep wadhwa",getHobbies);
getUserDataFromDb("akash",returnInfo);

