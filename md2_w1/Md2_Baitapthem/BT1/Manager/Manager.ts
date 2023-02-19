import {JobTitle,Sex} from "../Model/JobTitle";
import {IManager} from "./iManage";

export class ManagerJob implements IManager<any> {
    private JobTitles: JobTitle[]

   constructor() {
        this.JobTitles = []
   }
    add(t: any): void {
        this.JobTitles.push(t)

    }

    edit(id: number, t: any): void {
    }

    findById(id: number): number {
        return 0;
    }

    remove(id: number): void {
    }

    showAll(): any[] {
        return this.JobTitles;
    }

  get  getJobTitle(){

        return this.JobTitles
    }
}