let userNameD = document.querySelector('.userNameD')
let passLoginD = document.querySelector('.passLoginD')
let BtnD = document.querySelector('.btbD')
const DashboardPannel = document.querySelector('.About-site')

BtnD.addEventListener('click', () => {
    if (userNameD.value === 'dev2006' || passLoginD.value === '6580Es') {
        fetch('https://myresumeprofile-477f9-default-rtdb.firebaseio.com/Massage.json')
            .then(res => res.json())
            .then(data => {
                let allMassage = Object.entries(data)
                allMassage.forEach(Massage => {
                    DashboardPannel.insertAdjacentHTML('beforeend', `<style>.Login {display: none;}</style>          <div class='allmassage'>
                        <h2 class="userNameMass">نام کاربری:::::   ${Massage[1].firstname}</h2>
                        <h4 class="emailMass">ایمیل:::::    ${Massage[1].email}</h4>
                        <p class="everythingMass">پیغام دلخواه:::::   ${Massage[1].anotherMassage}</p>
                      </div>`)
                })
            })
            .catch(err => {
                console.log(err);
                
            })
    } else {
        userNameD.value = ''
        passLoginD.value = ''
        alert('نام کاربری یا رمز شما اشتباه است')
    }
})