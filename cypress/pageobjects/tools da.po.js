class toolsqapage {
    toolsimage() {
    return '[src="/images/Toolsqa.jpg"]'
    }
    Firstname(){
        return '[placeholder="Full Name"]'

    }
    email(){
        return'Input[type="email"]'
    }
    currentaddress(){
        return '[placeholder="Current Address"]'
    }
    permenentaddress(){
        return '[id="permanentAddress"]'
    }
    loginButton(){
        return '[id="submit"]'
    }
}

const toolsqa= new toolsqapage
export default toolsqa