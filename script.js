const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(key in data){
        if(data[key].profession=="developer"){
            console.log(data[key]);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let name=prompt("Enter name:");
    let age=Number(prompt("Enter age:"));
    let profession=prompt("Enter profession:");
    if(!name || isNaN(age) || !profession){
        alert("Invalid input. Please enter valid details.")
        return ;
    }
    function makeuser(name,age,profession){
        return {
            name,
            age,
            profession
        }
    }
    let newuser=makeuser(name,age,profession);
    data.push(newuser);
    console.log("New user Successfully added");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(key in data){
        if(data[key].profession==="admin"){
            data.splice(key,1);
        }
    }
    console.log("Admins have been removed successfully");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let temp_arr=[
        { name:"ABC", age:22, profession:"System Engineer" },
        { name:"DEF", age:19, profession:"Frontend" },
        { name:"IGK", age:25, profession:"Developer" }
    ]
    let dummy_arr=temp_arr.concat(data);
    console.log(dummy_arr);
}
  
  // 5. Average Age
  function averageAge() {
    let totalage=0;
    for(key in data){
        totalage+=data[key].age;
    }
    console.log("Average age = "+totalage/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(key in data){
        if(data[key].age>25){
            console.log("There is atleast one person who is older than 25");
            return ;
        }
    }
    console.log("There is no one who is older than 25");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let temp_arr=[];
    for(key in data){
        temp_arr.push(data[key].profession);
    }
    let ans=new Set(temp_arr);
    console.log(ans);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>{
        if(a.age<b.age){
            return -1;
        }
        else if(a.age>b.age){
            return 1;
        }
        else{
            return 0;
        }
    })
    console.log("The Information have been sorted successfully");
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(key in data){
        if(data[key].name==="john"){
            data[key].profession="manager";
        }
    }
    console.log("John's profession has been changed to manager");
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const profession_count=data.reduce((count,key)=>{
        count[key.profession]=(count[key.profession] || 0)+1;
        return count;
    },{});
    console.log(profession_count);
  }