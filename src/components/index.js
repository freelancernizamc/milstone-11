const images2 = [
    'assets/nizam.png',
    'assets/nizam2.png',
    'assets/Nizam bd.jpg',

]
let imgIndex2 = 0;
const imgE12 = document.getElementById('fotter-img');
setInterval(() => {
    if (imgIndex2 === images2.length) {
        imgIndex2 = 0;
    }
    const imgUrl2 = images2[imgIndex2];
    console.log(imgIndex2, imgUrl2);

    imgE12.setAttribute('src', imgUrl2)
    imgIndex2++;
}, 1000)