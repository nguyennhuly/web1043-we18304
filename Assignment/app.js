// chạy tự động 
var index = 1;
changeImage = function() {
    var imgs = ["/web1043-we18304//Assignment/img/bia.png", "/web1043-we18304//Assignment/img/biaaa.jpg","/web1043-we18304//Assignment/img/biaaaaaaaa.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 3){
        index =0;
    }
}
//gọi một hàm trong khoảng thời gian xác định (tính bằng mili giây).
setInterval(changeImage,2000);


//
function hover(){
      var nhap = document.querySelector("#tem1");
      nhap.style.backgroundColor =" bisque";
     
     
}
function out(){
    var tha = document.getElementById("tem1");
    tha.style.backgroundColor = "white";
}

function hover2(){
    var nhap = document.querySelector("#tem2");
    nhap.style.backgroundColor =" bisque";
   
   
}
function out2(){
  var tha = document.getElementById("tem2");
  tha.style.backgroundColor = "white";
}

function hover3(){
    var nhap = document.querySelector("#tem3");
    nhap.style.backgroundColor =" bisque";
   
   
}
function out3(){
  var tha = document.getElementById("tem3");
  tha.style.backgroundColor = "white";
}

function hover4(){
    var nhap = document.querySelector("#tem4");
    nhap.style.backgroundColor =" bisque";
   
   
}
function out4(){
  var tha = document.getElementById("tem4");
  tha.style.backgroundColor = "white";
}

function hover5(){
  var nhap = document.querySelector("#tem5");
  nhap.style.backgroundColor =" bisque";
 
 
}
function out5(){
var tha = document.getElementById("tem5");
tha.style.backgroundColor = "white";
}

function hover6(){
  var nhap = document.querySelector("#tem6");
  nhap.style.backgroundColor =" bisque";
 
 
}
function out6(){
var tha = document.getElementById("tem6");
tha.style.backgroundColor = "white";
}

//

//
function _hover1(){
    var nhap = document.getElementById("tem7");
    nhap.style.backgroundColor =" white";
   
}
function _out1(){
  var tha = document.getElementById("tem7");
  tha.style.backgroundColor = "oldlace";
}
function _hover2(){
    var nhap = document.getElementById("tem8");
    nhap.style.backgroundColor =" white";
   
}
function _out2(){
  var tha = document.getElementById("tem8");
  tha.style.backgroundColor = "oldlace";
}
function _hover3(){
    var nhap = document.getElementById("tem9");
    nhap.style.backgroundColor =" white";
   
}
function _out3(){
  var tha = document.getElementById("tem9");
  tha.style.backgroundColor = "oldlace";
}

//


//điền thông tin người dùng để đặt hàng
function send(){
    var arr = document.getElementsByTagName('input');
    var hoten = arr[0].value;
    var tuoi = arr[1].value;
    var diachi = arr[2].value;
    var check1 = arr[5].checked;
    var check2 = arr[6].checked;
    var check3 = arr[7].checked;
    var gioitinh = "";

    var sanpham = "";
    if(arr[3].checked){
        gioitinh ="nam";
    }else{
        gioitinh= "nu";
    }
    for(var i=5; i<=7;i++){
       if( arr[i].checked){
        sanpham = sanpham + arr[i].value+" ";
        
       }
    }

    if(hoten =="" || tuoi =="" || diachi ==""){
        alert("Bạn nhập thiếu thông tin!!!!");
        return;

    }
    if(isNaN(tuoi)){// neu nguoi dung nhap kh phải là số 
        alert("Bạn nhập sai!! vui lòng nhập số tuổi ");
        return;
    }

    if(check1||check2||check3){
       
    }else{
        alert("Bạn chọn ít nhất 1 món đồ để mua!");
        return;
    }

    var choice =confirm('Thông tin khách hàng đã nhập:\n'+hoten+"\n" +tuoi+"\n" + diachi+ "\n"+ gioitinh+"\n" + sanpham);
        if(choice==1){
            alert("Chúc mừng bạn đã đặt hàng thành công")
        }    
}
//được sử dụng để xóa tất cả các giá trị đã nhập vào các trường trong biểu mẫu.
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}

