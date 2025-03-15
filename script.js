console.log("Workiing")
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Submited");
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords){
        let json = []
        json.push({username : username.value, password :  password.value})
    }
})