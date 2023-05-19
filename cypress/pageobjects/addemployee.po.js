class addemployeepage {

    Firstname() {
        return '[placeholder="First Name"]'
    }
    Lastname() {
        return '[placeholder="Last Name"]'
    }
    nameinput(value){
        return '[placeholder="'+value+'"]'
    
    }
    switchbtn(){
        return '[class="oxd-switch-input oxd-switch-input--active --label-right"]'
    }
    username(){
        return "(//label[text()='Username']/../following::div/input)[1]"
    }
    password(){
        return "(//label[text()='Username']/../following::div/input)[2]"
    }
    confirmpassword(){
        return "(//label[text()='Username']/../following::div/input)[3]"
    }
    savebtn(){
        return 'button[type="submit"]'
    }
    EMPid() {
        return '#employeeId'
    }
    Loginbtn() {
        return '#chkLogin'
    }
    Empname() {
        return '#user_name'
    }
    Userpassword() {
        return '#user_password'
    } Adminmenu() {
        return 'span[class="oxd-topbar-body-nav-tab-item"]'
    }

}

const employeepage= new addemployeepage()

export default employeepage




