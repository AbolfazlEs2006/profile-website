let $ = document;

let arrProduct = [
    {id: 1,img: './assets/img/divarresume.png', title: 'ریفکتور سایت دیوار',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/8/26', links: 'http://divar.pythonanywhere.com'},
    {id: 2,img: './assets/img/profileimg.png', title: 'نمونه سایت پروفایل',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/5/13'},
    {id: 3,img: './assets/img/sassproject.png', title: 'سایت با استفاده از فریمورک sass',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2023/7/2'},
    {id: 4,img: './assets/img/shops.png', title: 'سایت انلاین شاپ و یه نمونه طراحی قالب است',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2022/6/14'},
    {id: 5,img: './assets/img/onlineshop-lg.png', title: 'سایت ویدیویی مانند نماوا',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/8/13'},
]
let myarr = [{
    age: 18,
    Gender: 'مرد',
    address: 'تهران-تهران',
    MaritalStatus: 'مجرد',
    Military: 'معافیت تحصیلی',
    mobile: 4551158,
    email: 'Abolfazl715800@gmail.com',
    link: 'http://divar.pythonanywhere.com/',
    univercity: 'کارشناسی پیوسته رشته فیزیک مهندسی',
    lang: 'انگلیسی متوسط',
}]

let Products = $.querySelector('.card-resume')
let backBtn = $.getElementById('btn-nav')
const aboutMe = $.querySelector('.info')
const FormContactUs = $.querySelector('.contactUsPage')

let locationParams = new URLSearchParams(location.search)
let mainParamsID = locationParams.get('id')

if (mainParamsID == 1) {
    myarr.forEach(info => {
        aboutMe.insertAdjacentHTML('beforeend', `        <div class="myInfo">
            <img src="./assets/img/myimg.jpg" alt="my profile">
            <h3 class="yourName">ابوالفضل استیری</h3>
            <div class="aboutMee">
                    <h3>مشخصات فردی</h3>
                    <h4>سن: <span>${info.age}</span></h4>
                    <h4>جنسیت: <span>${info.Gender}</span></h4>
                    <h4>محل سکونت: <span>${info.address}</span></h4>
                    <h4>وضعیت تاهل: <span>${info.MaritalStatus}</span></h4>
                    <h4>نظام وظیقه: <span>${info.Military}</span></h4>
                </div>
                <div class="contantUs">
                    <h3>اطلاعات تماس</h3>
                    <h4>تلقن: <span>${info.mobile}</span></h4>
                    <h4>ایمیل: <span>${info.email}</span></h4>
                </div>
                <div class="jobs">
                    <h3>نمونه کار ها</h3>
                    <a href="${info.link}"><span>${info.link}</span></a>
                </div>
        </div>
        <div class="allAboutMe">
            <div class="pads">
            <div class="univercity">
                    <h2>سوابق تحصیلی</h2>
                    <h3>${info.univercity}</h3>
                </div>
                <div class="jobs">
                    <h2>دوره های آموزشی</h2>
                    <h3>SQL SERVER <span>مدت دوره: 6ماه</span></h3>
                    <p>نام آموزشگاه:  <span>کندو</span></p>
                </div>
                <div class="getintouch">
                    <h2>زیان های خارجه</h2>
                    <h3>انگلیسی متوسط</h3>
                </div>
                <div class="skill">
                    <h2>نرم افزار ها</h2>
                    <h3>Microsoft Word</h3>
                    <h3>Microsoft Powerpoint</h3>
                    <h3>Adobe Photoshop</h3>
                    <h3>Microsoft Excel</h3>
                </div>
                <div class="title-skils">
                    <h2>مهارت های تکمیلی</h2>
                </div>
                <div class="skills">
                    <h3>SQL Server</h3>
                    <h3>Responsive design</h3>
                    <h3>طراحی تمامی وب سایت های پویا</h3>
                    <h3>Html</h3>
                    <h3>css</h3>
                    <h3>Tailwind css</h3>
                    <h3>Bootstrap</h3>
                    <h3>Sass</h3>
                    <h3>javasript</h3>
                    <h3>Rest api</h3>
                    <h3>Git</h3>
                    <h3>GitHub</h3>
                    <h3>GitLab</h3>
                    <h3>Wordpress</h3>
                </div>
            </div>
        </div> <style>.card-resume{display: none;}</style>`)
    })
    
} else if (mainParamsID == 3) {
    arrProduct.forEach(item => {
        Products.insertAdjacentHTML('beforeend', `<div class="about-cards">
            <div>
                <a href="${item.links}">
                    <img style="object-fit: cover; -o-object-fit: content;" class: "img-fluid" src="${item.img}" alt="resume/site">
                </a>
            </div>
            <div>
                <div>
                    <div class="info-card">
                        <h2>${item.title}</h2>
                        <h4> این سایت صرفا برای رزومه است و همچین سایتی برای شخص یا سازمانی ساخته و تولید نشده است &copy</h4>
                        <p>${item.paragragh}</p> 
                    </div>
                    <hr>
                    <div class="info-developer">
                        <h4 class="clock-developed"><i class="bi bi-clock-history"></i>${item.time}</h4>
                        <h4>: create by <span> abolfazl estiri </span> in</h4>
                    </div>
                </div>
            </div>
        </div>`)
    })
} else if (mainParamsID == 5) {
    FormContactUs.insertAdjacentHTML('beforeend', `            <style>
                .header-text {
                    display: none;
                }
                .card-resume {
                    display: none;
                }
                .Product  {
                    display: none;
                }
            </style>
            <img src="./assets/img/cityimg.webp" alt="">
            <div class="w-contact">
                <div class="w-contactUs">
                    <h2>ارتباط با من</h2>
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورسوالات  اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div class="w-sendMasseage">
                    <div class="w-FormContactUs">
                        <h3>ارسال پیام </h3>
                        <input type="text" placeholder="نام خود را وارد کنید">
                        <input type="text" placeholder="ایمیل">
                        <input type="text" placeholder="هر مسیجی که میخاهید برای من ارسال کنید را بنویسید:)">
                        <button>ارسال</button>
                    </div>
                    <div class="w-contactInfo">
                        <div class="w-contactPhone">
                            <div><h2><i class="bi bi-telephone"></i></h2></div>
                            <div>
                                <h2>Phone</h2>
                                <h4>*****44568</h4>
                            </div>
                        </div>
                        <div class="w-contactEmail">
                            <div><h2><i class="bi bi-envelope"></i></h2></div>
                            <div>
                                <h2>Email</h2>
                                <h4>Abolfazl715800@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
}


backBtn.addEventListener('click', () => {
    history.back()
})