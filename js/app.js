import { navItems } from './userArr.js'

let $ = document;

let navsLink = $.querySelector(".section-1");
let sectionTwo = $.querySelector(".section-2");
let sectionThree = $.querySelector(".section-3");

navItems.forEach(function (items) {
  navsLink.insertAdjacentHTML("beforeend",'<a class="active-select" href="./items.html?id=' + items.id + '"><div class="about-me rounded shadow-sm text-center"><span class="icon-nav">'+ items.icon +'</span><h1>' + items.title + '</h1></div></a>'
  );
});

let section2 = [
  {id: 1, img:'assets/img/myimg.jpg', titleMe: 'ابوالفضل استیری',}
]


section2.forEach(function (section2) {
  sectionTwo.insertAdjacentHTML('beforeend','<img src="'+section2.img+'" alt="profile-img" /><h1>'+section2.titleMe+'</h1><p>توسعه دهنده وب سایت های پویا</p><p class="p-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas fugitmolestiae fuga laudantium animi! Ratione, iusto aspernatur. Quia, quod!</p><button><a href="./assets/resumePdf/resumepdf.pdf" download style="color: white;">دانلود رزومه</a></button><div class="social-icons"><a><i class="bi bi-instagram"></i></a><a><i class="bi bi-telegram"></i></a><a><i class="bi bi-github"></i></a><a><i class="bi bi-twitter"></i></a><a><i class="bi bi-google"></i></a></div>')
})

sectionThree.insertAdjacentHTML('beforeend', '     <div><div class="sec-3"><h1>0 1</h1><h6>درباره من</h6><h2></h2><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی مسخت تایپ به پایانرسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالاتپیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p></div><div class="aboutMe"><h3>نام و نام خانوادگی: <span>ابوالفضل استیری</span></h3><h3>تاریخ تولد: <span>5 فروردین 1385</span></h3><h3>آدرس : <span>ایران ، تهران</span></h3><h3><span>Abolfazl715800@gmail.com</span>: ایمیل</h3></div></div>')

document.title = 'Abolfazl estiri'
