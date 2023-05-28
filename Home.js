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
    this.img = img ;
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
  

let employee1 = new Employee(" Ghazi Samer", "Administration", "Senior", "img/Ghazi.jpg" );
let employee2 = new Employee ("Lana Ali", "Finance", "Senior","img/Lana.jpg" );
let employee3 = new Employee (" Tamara Ayoub", "Marketing", "Senior", "img/Tamara.jpg");
let employee4 = new Employee(" Safi Walid", "Administration", "Mid-Senior","img/Safi.jpg" );
let employee5 = new Employee (" Omar Zaid", "Development", "Senior","img/Omar.jpg" );
let employee6 = new Employee ("Rana Saleh", "Development", "Junior","img/Rana.jpg" );
let employee7 = new Employee (" Hadi Ahmad", "Finance", "Mid-Senior","img/Hadi.jpg" );


let employeemainDiv = document.getElementsByTagName("body")[0];
let divAll= document.createElement("div");
employeemainDiv.appendChild(divAll);

let divA= document.createElement("div");
divAll.appendChild(divA);
let header4=document.createElement("h2");
        header4.textContent=("Administration");
        divA.appendChild(header4);
      
let divM= document.createElement("div");
divAll.appendChild(divM);
let header1=document.createElement("h2");
        header1.textContent=("Marketing");
        divM.appendChild(header1);
        
let divD= document.createElement("div");
divAll.appendChild(divD);
let header3=document.createElement("h2");
        header3.textContent=("Development");
        divD.appendChild(header3);
        
let divF= document.createElement("div");
divAll.appendChild(divF);
let header2=document.createElement("h2");
        header2.textContent=("Finance");
        divF.appendChild(header2);

Employee.prototype.renderEmployees=function(){
    let employeeDiv=document.createElement("div");
    


    let img=document.createElement("img");
    img.src=this.img;
    img.setAttribute("width","200");
    employeeDiv.appendChild(img);

    let mainParagraph=document.createElement("p");
    mainParagraph.textContent=` Name: ${this.fullName} - ID: ${this.uniqueID}  Department: ${this.theDepartment}  Level: ${this.theLevel} - Salary: ${this.salary}  `;
employeeDiv.appendChild(mainParagraph);


if (this.theDepartment==="Administration"){
    divA.appendChild(employeeDiv);
} else if (this.theDepartment==="Finance"){
    divF.appendChild(employeeDiv);
} else if(this.theDepartment==="Development") {
    divD.appendChild(employeeDiv);
}else {
    divM.appendChild(employeeDiv);
};


employeeDiv.style.border="none";
employeeDiv.style.borderRadius = "25px";
employeeDiv.style.boxShadow = "0px 0px 20px #A1C298";
employeeDiv.style.boxSizing = "border-box";
employeeDiv.style.width="300px";
employeeDiv.style.margin="10px";
employeeDiv.style.height="300px";
employeeDiv.style.textAlign = "center"; 
divAll.style.display= "flex";
divA.style.display="inline-block";
divM.style.display="inline-block";
divF.style.display="inline-block";
divD.style.display="inline-block";

}








for (let index = 0; index < allEmployees.length; index++) {
    allEmployees[index].createRandomid();
    allEmployees[index].createRandomsalary();
   allEmployees[index].renderEmployees();
 
}
