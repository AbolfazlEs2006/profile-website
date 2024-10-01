let $ = document;

let Products = $.querySelector('.Product')
let backBtn = $.getElementById('btn-nav')

console.log(Products);


let locationParams = new URLSearchParams(location.search)
let mainParamsID = locationParams.get('id')

if (mainParamsID == 3) {
    Products.insertAdjacentHTML('beforeend', `        <div class="nemone-kar">
            <div>
                <div class="job-text">
                    <h2>فروشگاه آنلاین </h2>
                    <p>...برای دیدن سایت روی عکس ها کلیک کنید</p>
                </div>
                <div class="job-img">
                    <a href="#">
                    <img id="Lg-img" src="assets/img/onlineshop-lg.png" alt="onlineshop">
                    </a>
                </div>
            </div>
            <div>
                <div class="job-text">
                    <h2>بیزینس سایت</h2>
                    <p>...برای دیدن سایت روی عکس ها کلیک کنید</p>
                </div>
                <div class="job-img">
                    <a href="#">
                    <img id="Lg-img" src="assets/img/another-lg.jpg" alt="onlineshop">
                    </a>
                </div>
            </div>
            <div>
                <div class="job-text">
                    <h2>بیزینس سایت</h2>
                    <p>...برای دیدن سایت روی عکس ها کلیک کنید</p>
                </div>
                <div class="job-img">
                    <a href="#">
                    <img id="Lg-img" src="assets/img/another-lg.jpg" alt="onlineshop">
                    </a>
                </div>
            </div>
        </div>`)
}

backBtn.addEventListener('click', () => {
    history.back()
})