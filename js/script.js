// // let x = new FormData("<form><input type='text' name='name' placeholder='enter name' value='ROHAN' /></from>")
// console.log(x);

let form = document.querySelector("form")
let url = "https://script.google.com/macros/s/AKfycbwazmYIzZtS4p7vJS2eOiRvNPJ_Gqvv6F1hipyAyrgrlcmXUHhIjoh4IoxdFnOOdzkjzg/exec";
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector('button').innerHTML = "submiting ";
console.log("e.target",e.target);
let x = new FormData(e.target)
console.log("form data : ",x);
fetch(url,{
    method:"POST",
    body:x,
}).then((res)=>{
    
    return res.text();
}).then((data)=>{
    document.querySelector('button').innerHTML = "submit";
    document.querySelector('form').style.display = "none";
    // document.querySelector('body').innerHTML = "sucess"
    alert(data);
    console.log(data);
})

})
// let x = new FormData(form);
// console.log(x);