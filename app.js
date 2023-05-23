'use strict';
let referenceID = 1000;

function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
const allEmployees = [];

function Employee (Name,Department,Level,img) {
    this.uniqueID =0;
    this.fullName = Name ;
    this.theDepartment = Department;
    this.theLevel = Level;
    this.imgURL = img ;
    this.salary = 0;
    

this.createRandomid=function(){
    this.uniqueID=referenceID 
    referenceID=referenceID+1

}

 this.createRandomsalary=function(){
    let salaryTax;
    let netSalary;
    switch (this.theLevel) {
        case "Junior":
            this.salary=getRandomInt(500, 1000)
            salaryTax=this.salary*.075
            netSalary=this.salary-salaryTax
    
            break;
            case "Mid-Senior":
            this.salary=getRandomInt(1000, 1500)
            salaryTax=this.salary*.075
            netSalary=this.salary-salaryTax
            break;
    
        default:
           this.salary=getRandomInt(1500, 2000)
            salaryTax=this.salary*.075
            netSalary=this.salary-salaryTax
            break;
    }
    
    }

   allEmployees.push(this);
 }
  

let employee1 = new Employee(" Ghazi Samer", "Administration", "Senior", "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png");
let employee2 = new Employee ("Lana Ali", "Finance", "Senior", "https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png ");
let employee3 = new Employee (" Tamara Ayoub", "Marketing", "Senior", "https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png");
let employee4 = new Employee(" Safi Walid", "Administration", "Mid-Senior", "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png");
let employee5 = new Employee (" Omar Zaid", "Development", "Senior", "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png");
let employee6 = new Employee ("Rana Saleh", "Development", "Junior", "https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png");
let employee7 = new Employee (" Hadi Ahmad", "Finance", "Mid-Senior", "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png");


Employee.prototype.renderEmployees=function(){

    document.write(`Employee Name : ${this.fullName} <br> Employee Salary : ${this.salary}<br><br> `)
}

for (let index = 0; index < allEmployees.length; index++) {
    allEmployees[index].createRandomid();
    allEmployees[index].createRandomsalary();
   allEmployees[index].renderEmployees();
 
}
