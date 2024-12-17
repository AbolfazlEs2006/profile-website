import { navItems } from './userArr.js'

let $ = document;

let navsLink = $.querySelector(".section-div-1");
let sectionTwo = $.querySelector(".section-2");
let sectionThree = $.querySelector(".section-3");
const closeBtn = document.querySelector('.closeBtn')
const closeBtnElem = document.getElementById('closeBtn')
const openNav = document.getElementById('openNav')
const navbar = document.querySelector('.linkNavbar')

navItems.forEach(function (items) {
  navsLink.insertAdjacentHTML("beforeend",'<a class="active-select" href="./items.html?item=' + items.item + '"><div class="about-me rounded shadow-sm text-center"><h1>' + items.title + '</h1><span class="icon-nav">'+ items.icon +'</span></div></a>'
  );
  navbar.insertAdjacentHTML('beforeend', `          <a href="./items.html?item=${items.item}">
            <li>${items.title}${items.icon}</li>
          </a>`)
});

let section2 = [
  {id: 1, img:'assets/img/myimg.jpg', titleMe: 'ابوالفضل استیری',}
]


section2.forEach(function (section2) {
  sectionTwo.insertAdjacentHTML('beforeend','<img src="'+section2.img+'" alt="profile-img" /><h1>'+section2.titleMe+'</h1><p>توسعه دهنده وب سایت های پویا</p><p class="p-about">سلام من ابوالفضل استیری هستم دانشجوی رشته فیزیک مهندسی دانشگاه گیلان و سه سال است که در این حوزه فعالیت میکنم و مایل هستم نمونه کار ها و پروژه های خودم را با شما به اشتراک بذارم :)</p><button><a href="./assets/resumePdf/faresume.pdf" download style="color: white;">دانلود رزومه</a></button><div class="social-icons"><a href="#"><i class="bi bi-instagram"></i></a><a href="https://t.me/Abol727"><i class="bi bi-telegram"></i></a><a href="https://github.com/Webdeveloper2006"><i class="bi bi-github"></i></a><a href="linkedin.com/in/abolfazl-estiri-a0b8b12b6"><i class="bi bi-linkedin"></i></a></div>')
})

sectionThree.insertAdjacentHTML('beforeend', '     <div><div class="sec-3"><h1>0 1</h1><h6>درباره من</h6><h2></h2><p>سلام من ابوالفضل استیری هستم دانشجوی رشته فیزیک مهندسی دانشگاه گیلان و سه سال است که در این حوزه فعالیت میکنم و مایل هستم نمونه کار ها و پروژه های خودم را با شما به اشتراک بذارم :)</p></div><div class="aboutMe"><h3>نام و نام خانوادگی: <span>ابوالفضل استیری</span></h3><h3>تاریخ تولد: <span>5 فروردین 1385</span></h3><h3>آدرس : <span>ایران ، تهران</span></h3><h3>ایمیل: <span>Abolfazl715800@gmail.com</span></h3></div></div>')

document.title = 'Abolfazl estiri'

openNav.addEventListener('click', () => {
  closeBtn.classList.toggle('visibility')
})
closeBtnElem.addEventListener('click', () => {
  closeBtn.classList.toggle('visibility')
})