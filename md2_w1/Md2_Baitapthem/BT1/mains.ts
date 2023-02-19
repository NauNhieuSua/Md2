import {JobTitle,Sex} from "./Model/JobTitle";
import {Employee} from "./Model/Employee";
import {Engineer} from "./Model/Engineer";
import {Worker} from "./Model/Worker";
import {ManagerJob} from "./Manager/Manager";

// @ts-ignore
let input = require('readline-sync');
// let Jobtitles1 = new ManagerJob() 
let Work1 = new ManagerJob()
let Engineers1 = new ManagerJob()
let Employees1 = new ManagerJob()

function showMainMenu() {
    let choice = -1
    do {
        console.log(`
           ---- Main Menu ----
        1.Thêm mới
        2.Hiển thị tất cả
        3.Sửa
        4.Xóa
        0.Thoát
        `)
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                showJob()
                break;
            case 2:
                showall()
                break;
            case 3:
                showUpdateJob()
                break;
            case 4:

                break;
        }
    } while (choice !== 0);
}

function showJob() {
    let choice = -1
    do {
        console.log(`
           ---- Main MenuJob ----
        1.addWorker
        2.addEngineer
        3.addEmployee
        0.Thoát
        `)
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                addWorker()
                break;
            case 2:
                addEngineer()
                break;
            case 3:
                addEmployee()
                break;

        }
    } while (choice !== 0);
}

function showUpdateJob() {
    let choice = -1
    do {
        console.log(`
           ---- Main Menu Update Job ----
        1.Update Worker
        2.Update Engineer
        3.Update Employee
        0.Thoát
        `)
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                editByIdWork()
                break;
            case 2:
                editByIdEngineer()
                break;
            case 3:
                editByIdEmployee()
                break;
        }
    } while (choice !== 0);
}
function addWorker(){
    console.log('-----Menu Worker thêm mới ------');
    let id = +input.question('Enter id : ');
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex:');
    let age = +input.question('Enter age: ');
    let address = input.question('Enter address: ');
    let level = +input.question('Enter level : ');
    let worker1 = new Worker(id,fullName,age,sex,address,level);
    Work1.add(worker1);
    return Work1;
}
function addEngineer(){
    console.log('-----Menu Engineer thêm mới ------')
    let id = +input.question('Enter id : ')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex:');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let TrainingIndustry = input.question('Enter TrainingIndustry : ');
    let engineer1 = new Engineer(id,fullName,age,sex,address,TrainingIndustry)
    Engineers1.add(engineer1)
    return Engineers1
}

function addEmployee(){
    console.log('-----Menu Employee thêm mới ------')
    let id = +input.question('Enter id : ')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex:');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let work = input.question('Enter work : ');
    let employee = new Employee(id,fullName,age,sex,address,work)
    Employees1.add(employee)
    return Employees1
}

function showall(){
    console.log(Engineers1.showAll())
    console.log(Work1.showAll())
    console.log(Employees1.showAll())

}

function editByIdWork(id:number=+input.question('Enter id : ')){
    Work1.getJobTitle.forEach((work,index)=>{
        if(work.ID===id){
            console.log('-----Menu Worker Update ------')
            let updateId = id
            let updateFullName = input.question('Enter update full name : ');
            let updateSex = input.question('Enter update sex:');
            let updateAge = +input.question('Enter update age: ')
            let updateAddress = input.question('Enter update address: ')
            let updateLevel = +input.question('Enter update level : ');
            let workerUpdate = new Worker(updateId,updateFullName,updateAge,updateSex,updateAddress,updateLevel)
            Work1.getJobTitle.splice(index,1,workerUpdate)
        }
    })
    return Work1
}

function editByIdEngineer(id:number=+input.question('Enter id : ')){
    Engineers1.getJobTitle.map((engineer,index)=>{
        if(engineer.ID===id){
            console.log('-----Menu Engineer Update ------')
            let updateId = id
            let updateFullName = input.question('Enter update full name : ');
            let updateSex = input.question('Enter update sex:');
            let updateAge = +input.question('Enter update age: ')
            let updateAddress = input.question('Enter update address: ')
            let updateTraining = input.question('Enter update trainingIndustry : ');
            let EngineerUpdate = new Engineer(updateId,updateFullName,updateAge,updateSex,updateAddress,updateTraining)
            Engineers1.getJobTitle.splice(index,1,EngineerUpdate)
        }
    })
    return Engineers1
}

function editByIdEmployee(id:number=+input.question('Enter id : ')){
    Employees1.getJobTitle.forEach((employee,index)=>{
        if(employee.ID===id){
            console.log('-----Menu Employee Update ------')
            let updateId = id
            let updateFullName = input.question('Enter update full name : ');
            let updateSex = input.question('Enter update sex:');
            let updateAge = +input.question('Enter update age: ')
            let updateAddress = input.question('Enter update address: ')
            let updateWork = input.question('Enter update Work : ');
            let EmployeeUpdate = new Worker(updateId,updateFullName,updateAge,updateSex,updateAddress,updateWork)
            Employees1.getJobTitle.splice(index,1,EmployeeUpdate)
        }
    })
    return Employees1

}


showMainMenu()
