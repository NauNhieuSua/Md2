import {college} from "./TuyenSinh/iCollege";
import {College} from "./TuyenSinh/TuyenSinh";
import {Student} from "./Model/Student";
import {StudentBlock,Block} from "./Model/StudentBlock";

// @ts-ignore
let input = require('readline-sync');

let StudentList: College = new College()

function DisplayMenu() {
    let choice = -1
    do {
        console.log(`
        -----Main Menu-----
        1.Thêm Student
        2.Hiển thị danh sách
        3.Tìm kiếm Student
        0. Thoát
        `)
        choice = +input.question('Enter choice:')
        switch (choice){
            case 1:
                addStudent()
                break;
            case 2:
                console.log(StudentList)
                break;
            case 3:
                filterStudent()
                break;
        }
    }while (choice !=0)
}

function addStudent(){
    console.log('-----Thêm mới Student-----')
    let idStudent = +input.question('Enter id Student: ')
    let fullname = input.question('Enter full name: ')
    let address = input.question('Enter address: ')
    let priority = input.question('Enter priority: ')
    let block:Block = input.question('Enter Block: ')
    let student = new StudentBlock(idStudent,fullname,address,priority,block)
    StudentList.addStudent(student)
    return StudentList
}

function filterStudent(id:number=+input.question('Enter id search:')){
    let filterStudentList = StudentList.getStudens.find((student)=>{
        return student.identificationNumber ===id
    })
    console.log(filterStudentList)

}


DisplayMenu()