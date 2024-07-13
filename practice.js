// var regexp=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
// var reg_ph=/^(?=.*[A-Z])(?=.*[\d])(?=.*[@#_])[A-Za-z\d@#_]{4,8}$/;
// function validate(){
//   let email=document.getElementById('email').value;
//   let pass=document.getElementById('password').value;
//   let message=document.getElementById('msg');
//   if(!reg_ph.test(pass)){
//     message.innerHTML="invalid pass";
//     message.style.color="red";
//   }else{
//     message.innerHTML="valid pass"
//     message.style.color="green";
//   }
// }
let checkboxes=document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox=>{
  checkbox.addEventListener('change',()=>{
    let checkedcheckboxes=document.querySelectorAll('.checkbox:checked')
    if(checkedcheckboxes.length >2){
      alert("can only select 2 options")
      checkbox.checked = false; 
    }
  })
})