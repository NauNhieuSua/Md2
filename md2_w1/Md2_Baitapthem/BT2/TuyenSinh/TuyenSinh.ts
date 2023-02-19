import {Student} from "../Model/Student";
import {StudentBlock,Block} from "../Model/StudentBlock";
import {college} from "./iCollege";

export class College implements college{
    private Students : Student[]

    constructor() {
        this.Students = []
    }


    addStudent(student: Student): void {
         this.Students.push(student)
    }

    displayStudent(): void {
    }

    remove(): void {
    }

    searchByNameStudent(): void {
    }

    get getStudens(){
        return this.Students
    }


}