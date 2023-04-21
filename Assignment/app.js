// chạy tự động 
var index = 1;
function changeImage() {
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
function validateForm() {
    // Lấy thông tin từ người dùng
    let hoten= document.getElementById("name").value;
  
    let diachi = document.getElementById("address").value;
  
    let sdt = document.getElementById("phone").value;
  
    let email = document.getElementById("email").value;
  
    let phuongthucthanhtoan = document.getElementById("payment-method").value;
  
  
   
    // Kiểm tra tính hợp lệ của thông tin người dùng
    let loi = [];
  
    if (!hoten) {
      loi.push("Vui lòng nhập họ tên của bạn");
    }
  
    if (!diachi) {
      loi.push("Vui lòng nhập địa chỉ của bạn");
    }
  
    if (!sdt) {
      loi.push("Vui lòng nhập số điện thoại của bạn");
    } else if (!/^\d{10}$/.test(sdt)) {
      loi.push("Số điện thoại không hợp lệ");
    }
  
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      loi.push("Địa chỉ email không hợp lệ");
    }
  
    if (!phuongthucthanhtoan) {
      loi.push("Vui lòng chọn phương thức thanh toán");
    }
  
    // Nếu có lỗi, hiển thị thông báo lỗi và ngăn người dùng gửi đơn hàng
    if (loi.length > 0) {
      alert(loi.join("\n")); // kết hợp các phần tử của một mảng thành một chuỗi.
      return false;
    } else {
      // Nếu không có lỗi
      alert("Thông tin khách hàng đã nhập :"+ "\n" +hoten+ "\n"+ diachi+ "\n" +sdt+"\n"+ email+"\n"+ phuongthucthanhtoan);
      alert("Chúc mừng bạn đã đặt hàng thành công!!!!")
    }
  }
      

  var myMouseover = document.querySelectorAll("#row-mouseover");
for (var i = 0; i < myMouseover.length; i++) {
  myMouseover[i].addEventListener("mouseover", function(event) {
    event.currentTarget.style.border = "3px solid #fe7a7b";
    event.currentTarget.style.transform = "scaleY(1.1)"

  });
  myMouseover[i].addEventListener("mouseout", function(event) {
    event.currentTarget.style.border = "none";
    event.currentTarget.style.transform = "scaleY(1.0)"
  });
}