class DemoQA {
    qatoolLog(){
        return'img[src="/images/Toolsqa.jpg"]'

    }
    fullname(){
        return'Input[placeholder="Full Name"]'
    }
    email(){
        return'Input[type="email"]'
    }
    currentAddress(){
      return'Textarea[placeholder="Current Address"]'  
    }
    permenentAddress(){
    
       return'Textarea[ id="permanentAddress"]'
    }
    loginButton(){
        return'Button[type="submit"]'
    }

}

const demoqa =new DemoQA

export default demoqa