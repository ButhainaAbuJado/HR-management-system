'use strict';
let referenceID = 1000;

function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let employees=[
{
  uniqueID: referenceID,
  fullName: "Ghazi Samer",
  theDepartment: "Administration",
  theLevel: "Senior",
  imgURL: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
  salary:0,
  salaryTax:0,
  netSalary:0
},
{
    uniqueID: referenceID+1,
    fullName: "Lana Ali",
    theDepartment: "Finance",
    theLevel: "Senior",
    imgURL: " https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png ",
    salary:0,
    salaryTax:0,
    netSalary:0

  },
  {
    uniqueID: referenceID+2,
    fullName: "Tamara Ayoub",
    theDepartment: "Marketing",
    theLevel: "Senior",
    imgURL: " https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png ",
    salary:0,
    salaryTax:0,
    netSalary:0

  },
  {
    uniqueID: referenceID+3,
    fullName: "Safi Walid",
    theDepartment: "Administration",
    theLevel: "Mid-Senior",
    imgURL: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
    salary:0,
    salaryTax:0,
    netSalary:0
  },
  {
    uniqueID: referenceID+4,
    fullName: "Omar Zaid",
    theDepartment: "Development",
    theLevel: "Senior",
    imgURL: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
    salary:0,
    salaryTax:0,
    netSalary:0
  },
  {
    uniqueID: referenceID+5,
    fullName: "	Rana Saleh",
    theDepartment: "Development",
    theLevel: "Junior",
    imgURL: " https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png ",
    salary:0,
    salaryTax:0,
    netSalary:0

  },
  {
    uniqueID: referenceID+6,
    fullName: "Hadi Ahmad",
    theDepartment: "Finance",
    theLevel: "Mid-Senior",
    imgURL: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
    salary:0,
    salaryTax:0,
    netSalary:0
  }
]


for (let i = 0; i < employees.length; i++) {
switch (employees[i].theLevel) {
    case "Junior":
        employees[i].salary=getRandomInt(500, 1000)
        employees[i].salaryTax=employees[i].salary*.075
        employees[i].netSalary=employees[i].salary-employees[i].salaryTax

        break;
        case "Mid-Senior":
        employees[i].salary=getRandomInt(1000, 1500)
        employees[i].salaryTax=employees[i].salary*.075
        employees[i].netSalary=employees[i].salary-employees[i].salaryTax
        break;

    default:
        employees[i].salary=getRandomInt(1500, 2000)
        employees[i].salaryTax=employees[i].salary*.075
        employees[i].netSalary=employees[i].salary-employees[i].salaryTax
        break;
}

}

document.getElementById("employee1").innerHTML = `Employee Name : ${employees[0].fullName} <br> Employee Salary : ${employees[0].netSalary}`
document.getElementById("employee2").innerHTML = `Employee Name : ${employees[1].fullName} <br> Employee Salary : ${employees[1].netSalary}`
document.getElementById("employee3").innerHTML = `Employee Name : ${employees[2].fullName} <br> Employee Salary : ${employees[2].netSalary}`
document.getElementById("employee4").innerHTML = `Employee Name : ${employees[3].fullName} <br> Employee Salary : ${employees[3].netSalary}`
document.getElementById("employee5").innerHTML = `Employee Name : ${employees[4].fullName} <br> Employee Salary : ${employees[4].netSalary}`
document.getElementById("employee6").innerHTML = `Employee Name : ${employees[5].fullName} <br> Employee Salary : ${employees[5].netSalary}`
document.getElementById("employee7").innerHTML = `Employee Name : ${employees[6].fullName} <br> Employee Salary : ${employees[6].netSalary}`