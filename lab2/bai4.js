let a=["tue","thu","sat","nine"]; 
// Xóa phần tử "Nine" khỏi mảng
a.pop("nine");
// Thêm các phần tử vào mảng
a.splice(0,0,"mon");
a.splice(2,0,"we");
a.splice(4,0,"fri");
// Thêm "Sun" vào cuối mảng
a.push("sun");
//in ra
console.log(a);
 