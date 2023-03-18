
do{

    console.log("-------------menu-----------------")
    console.log("1.Tính điểm trung bình (switch case) ");
    console.log("2.Tính điểm trung bình (if else) ");
    console.log("0.thoát");
    console.log("----------------------------------")

let chon = parseInt(prompt("Mời chọn chức năng")) ;

switch(chon){ 
    case 1:
        console.log("(switch case)");
        diemtb_1();
        break;
    case 2:
        console.log("(if else)") ;
        diemtb_2(); 
        break; 
     case 0:
         console.log("thoat chuong trinh");
         break;
         
    default:
        console.log("ban nhap sai chuc nang 0-2 !!");

}
console.log("end");

}while(true);



function diemtb_1(){ 

//nhap diem va kiem tra dau vao
     
    let toan = parseFloat(prompt("moi nhập điểm toán"));
    let ly  = parseFloat(prompt("moi nhập điểm lý"));
    let hoa = parseFloat(prompt("moi nhập điểm hóa "));
    let sinh = parseFloat(prompt("moi nhập điểm sinh "));
    if(0<=toan<=10 && 0<=ly<=10 && 0<=hoa<=10 && 0<=sinh<=10){
        //tinh trung binh cong
        var diemtb = (toan+ly+hoa+sinh)/4;
        console.log("điểm trung bình:"+diemtb);
    //xep loai 
       switch(diemtb){
        case 10:
        case 9 :
            console.log("giỏi");
            break;
        case 8:
        case 7:
            console.log("khá");
            break;
        case 6:
        case 5:
            console.log("trung bình");
            break;
        default:
            console.log("Yếu");                        
       }
           
    }else{
        console.log("Ban nhap sai, vui long nhap lai diem!");
     }
   
}


function diemtb_2(){ 

    //nhap diem va kiem tra dau vao
         
        let toan = parseFloat(prompt("moi nhập điểm toán"));
        let ly  = parseFloat(prompt("moi nhập điểm lý"));
        let hoa = parseFloat(prompt("moi nhập điểm hóa "));
        let sinh = parseFloat(prompt("moi nhập điểm sinh "));
        if(0<=toan<=10 && 0<=ly<=10 && 0<=hoa<=10 && 0<=sinh<=10){
            //tinh trung binh cong
            var diemtb = (toan+ly+hoa+sinh)/4;
            console.log("điểm trung bình:"+diemtb);
           //xep loai 
           if(diemtb>=9){
               console.log("giỏi");
           }else if(diemtb>=7){
               console.log("khá");
           }else if(diemtb>=5){
               console.log("trung bình");
           }else{
               console.log("Yếu");
           }
        }else{
            console.log("Ban nhap sai, vui long nhap lai diem!");
         }
       
    }

