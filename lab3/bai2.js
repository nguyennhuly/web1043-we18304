var x ='';
function a (id){
    return document.getElementById(id);
}
function tinh(num){
    x+=num;
    a('kq').value=x;
}
function xoa(){
    x='';
    a('kq').value=x;
}

function ket_qua(){
    a('kq').value=eval(a('kq').value);
    x=a('kq').value;
}

