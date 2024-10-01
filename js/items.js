let $ = document;

let arrProduct = [
    {id: 1,img: './assets/img/onlineshop-lg.png', title: 'نمونه سایت فروشگاهی',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/8/26'},
    {id: 2,img: './assets/img/onlineshop-lg.png', title: 'نمونه سایت انگلیسی',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/5/13'},
    {id: 3,img: './assets/img/onlineshop-lg.png', title: 'سایت با استفاده از فریمورک sass',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2023/7/2'},
    {id: 4,img: './assets/img/onlineshop-lg.png', title: 'سایت با استفاده از فریمورک sass',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2022/6/14'},
    {id: 5,img: './assets/img/onlineshop-lg.png', title: 'سایت ویدیویی مانند نماوا',about: `این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است ©`, paragragh: `شما با کلیک روی هر عکس میتونید وب سایت را تماشا کنید و ممنون میشم نظر خود را راجب اون سایت بدهید :)`, time: '2024/8/13'},
]

let Products = $.querySelector('.card-resume')
let backBtn = $.getElementById('btn-nav')

let locationParams = new URLSearchParams(location.search)
let mainParamsID = locationParams.get('id')

if (mainParamsID == 3) {
    arrProduct.forEach(item => {
        Products.insertAdjacentHTML('beforeend', `<div class="about-cards">
            <div>
                <a href="#">
                    <img src="${item.img}" alt="resume/site">
                </a>
            </div>
            <div>
                <div>
                    <div class="info-card">
                        <h2>${item.title}</h2>
                        <h4> این سایت صرفا برای رزومه است و همچین سایتی برای شخصی ساخته و تولید نشده است &copy</h4>
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
}

backBtn.addEventListener('click', () => {
    history.back()
})