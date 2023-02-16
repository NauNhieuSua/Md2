import {CanBo} from "./CanBo";
import {CongNhan} from "./CongNhan";
import {KySu} from "./KySu";
import {NhanVien} from "./NhanVien";
type kieucanbo = CongNhan | KySu | NhanVien
class Quanlycanbo{
    private Canbos = []
    constructor() {
    }

    set addCanbo(Canbo:kieucanbo){
        this.Canbos.push(Canbo)
    }

    get getCanbos() {
        return this.Canbos
    }
    timkiem(name:string){
        let filterCanbos = this.Canbos.filter((canbo:kieucanbo,index)=>{
            return canbo.name === name
        })
        return filterCanbos
}
}

let Congnhan1: CongNhan = new CongNhan("Phát",25,"Nam",'HCM',1)
let Congnhan2: CongNhan = new CongNhan("Trường",25,"Nam",'Hà Nội',4)
let Congnhan3: CongNhan = new CongNhan("Duyên",27,"Nam",'HCM',5)
let Congnhan4: CongNhan = new CongNhan("Vui",29,"Nữ",'HCM',6)
let Congnhan5: CongNhan = new CongNhan("Linh",31,"Khác",'HCM',7)
let Kysu1: KySu = new KySu("Linh",20,"Khác",'Hải Phòng',"IT")
let Kysu2: KySu = new KySu("Tấn",19,"Nam",'Hải Phòng',"Hóa dầu")
let Kysu3: KySu = new KySu("Huệ",20,"Nữ",'Hải Phòng',"Xây dựng")
let Kysu4: KySu = new KySu("Xuân",20,"Nam",'Hải Phòng',"IT")
let nhanvien1: NhanVien = new NhanVien("Xuân",25,"Nữ",'Hà Nội',"Nhân sự")
let nhanvien2: NhanVien = new NhanVien("Hoa",26,"Nữ",'Hà Nội',"Kế toán")
let nhanvien3: NhanVien = new NhanVien("Tuấn",27,"Nam",'Hà Nội',"Bảo vệ")

let Nhansu: Quanlycanbo = new Quanlycanbo()

Nhansu.addCanbo = Congnhan1
Nhansu.addCanbo = Congnhan2
Nhansu.addCanbo = Congnhan3
Nhansu.addCanbo = Congnhan4
Nhansu.addCanbo = Congnhan5
Nhansu.addCanbo = Kysu1
Nhansu.addCanbo = Kysu2
Nhansu.addCanbo = Kysu3
Nhansu.addCanbo = Kysu4
Nhansu.addCanbo = nhanvien1
Nhansu.addCanbo = nhanvien2
Nhansu.addCanbo = nhanvien3


// console.log(Nhansu.getCanbos)
console.log(Nhansu.timkiem("Xuân"))