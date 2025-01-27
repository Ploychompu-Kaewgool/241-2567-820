function submitData() {
    let firstNameDom = document.querySelector('input[name = firstname]')
    let lastNameDom = document.querySelector('input[name = lastname]')
    let ageDom = document.querySelector('input[name=age]')
    
    let genderDom = document.querySelector('input[name=gender]:checked')
    let interestDom = document.querySelectorAll('input[name=interest]:checked')
    
    let discriptionDom = document.querySelector('textarea[name=discription]')

    let interest = ''

    for(let i = 0; i < interestDom.length; i++) {
        interest += interestDom[i].value
        if(i < interestDom.length - 1) {
            interest += ','
    }
}

    let userData = {firstName: firstNameDom.value, 
        lastName: lastNameDom.value, 
        age: ageDom.value , 
        gender: genderDom.value, 
        interest: [], 
        discription: discriptionDom.value,
        interest: interest
    }

    console.log('submitData',userData)
}
