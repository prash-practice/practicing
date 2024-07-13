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