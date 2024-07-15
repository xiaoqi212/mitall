// header-nav上的文字如果被鼠标悬停
const anchor = document.querySelector('.header-nav a')
// 列表内容
const menuDom = document.querySelector('.nav-list')

let isHovered = false
anchor.addEventListener('mouseenter', function() {
    menuDom.style.display = 'block'
    isHovered = true
})

anchor.addEventListener('mouseleave', function() {
    menuDom.style.display = 'none'
    isHovered == false
})

// 完成轮播图的效果
var doms = {
    carousel: document.querySelector('.carousel'),
    indicators: document.querySelectorAll('.indicator span')
}
let currentIndex = 0;

function moveTo(index) {
    doms.carousel.style.transform = `translateX(-${index}00%)`;
    // 去除当前选择的指示器
    var active = document.querySelector('.indicator span.active')
    active.classList.remove('active')
    // 重新设置要选择的指示器
    doms.indicators[index].classList.add('active');
}

doms.indicators.forEach(function(item, i) {
    item.onclick = function() {
        moveTo(i);
    }
})

// 轮播图自动播放
const imageCount = doms.indicators.length;

function changeImage() {
    moveTo(currentIndex);

    doms.indicators[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imageCount;
    doms.indicators[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000); 

// 置顶按钮
var zd = document.querySelector('.back_top');
window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 875) {
        zd.style.display = 'flex';
    } else {
        zd.style.display = 'none';
    }
})

zd.onclick = function() {
    scrollToTop();
}

function scrollToTop() {
    const currentPosition = document.documentElement.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10);
    }
}


