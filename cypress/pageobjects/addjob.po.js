class addjobpage{
    addbtn(){
    return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
}
jobname(){
    
    return '[class="oxd-input oxd-input--active"]'
}
paygradename(){
    
    return '[class="oxd-input oxd-input--active"]'
}
savebtn(){
    return '//button[@type="submit"]'
}
paygreads(){

    return "Pay Grades"
}
jobsubmenu(){
    return "Job"
}
topbar(){
    return '[class="oxd-topbar-header-title"]'
}
moremenu(){
    return ':nth-child(6) > .oxd-topbar-body-nav-tab-item'
}
assignleave(){
    return "Assign Leave"
}
empname(){
    return 'input[placeholder="Type for hints..."]'
}
date(){
    return 'input[placeholder="yyyy-mm-dd"]'
}
comments(){
    return '[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]'
}
admin(){
    return 'Admin'
}
empstatus(){
    return'Employment Status'
}
workshift(){
    return '"Work Shifts"'
}
leave(){
    return 'Leave'
}
more(){
    return ':nth-child(6) > .oxd-topbar-body-nav-tab-item'
}
canpersonal(){
    return 'CAN - Personal'
}
payname(){
    return 'input[placeholder="Type for hints..."]'
}
dname(){
    return '[class="oxd-select-text--after"]'
}

}
const jobpage= new addjobpage()
export default jobpage