const user = {
    name : "Samir",
    login(){
        console.log("Logged in as",this.name)
    }
}
const button = {
    click(handler){
        handler()
    }
}
// without bind 
button.click(user.login)

// with bind 
button.click(user.login.bind(user))