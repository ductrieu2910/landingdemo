
  //lấy phần tử có id là 'modal-1'
var nmodal1 = document.getElementById('modal-1');
var nmodal2 = document.getElementById('modal-2');
var qua1 = document.getElementById('qua1');
var qua11 = document.getElementById('qua11');
var qua2 = document.getElementById('qua2');
var qua22 = document.getElementById('qua22');
var qua3 = document.getElementById('qua3');
var qua33 = document.getElementById('qua33');
var qua4 = document.getElementById('qua4');
var qua44 = document.getElementById('qua44');
var qua5 = document.getElementById('qua5');
var qua55 = document.getElementById('qua55');
// bắt sự kiện click trên cửa sổ
window.onclick = function(event){
    //Kiểm tra nếu phần tử đc click là chính phần tử modal
    if (event.target == nmodal2) {
        // Ẩn phần tử modal1
        nmodal1.style.display = "none";
    }
    if (event.target == qua11){
        qua1.style.display = "none";
    }
    if (event.target == qua22){
        qua2.style.display = "none";
    }
    if (event.target == qua33){
        qua3.style.display = "none";
    }
    if (event.target == qua44){
        qua4.style.display = "none";
    }
    if (event.target == qua55){
        qua5.style.display = "none";
    }
} 