fetch('../books.json') //path to the file with json data
.then(response => {
    console.log(response.json());
})
.then(data => {
    console.log(data);
});

window.onload = function () {
    headeer = document.createElement("header");
    headeer.classList.add("header_style");

    headerBody = document.createElement('div');
    headerBody.classList.add('container_header')

    logoBody = document.createElement('div');
    logoBody.classList.add('logoBody');
    logo = document.createElement('img');
    logo.classList.add('logo_img');
    logo.src = '../assets/image/open-book.png';
    logoText = document.createElement('p');
    logoText.classList.add('logoText');
    p_text = document.createTextNode('Welcome to book shop!');
    logoText.appendChild(p_text);
    logoBody.appendChild(logo);
    logoBody.appendChild(logoText);

    imageCenter = document.createElement('img');
    imageCenter.classList.add('image_header')
    imageCenter.src = '../assets/image/bookshelf2.png';

    basketBody = document.createElement('div');
    basketBody.classList.add('basketBody');
    basket_img = document.createElement('img');
    basket_img.classList.add('basket_img');
    basket_img.src = '../assets/image/bag.png';
    basketText = document.createElement('p');
    basketText.classList.add('basketText')
    p_basket_t = document.createTextNode('Basket');
    basketText.appendChild(p_basket_t);
    basketBody.appendChild(basket_img);
    basketBody.appendChild(basketText);

    headerBody.appendChild(logoBody)
    headerBody.appendChild(imageCenter);
    headerBody.appendChild(basketBody);
    headeer.appendChild(headerBody);


    mainContainer = document.createElement('div');
    mainContainer.classList.add('container');


    document.body.appendChild(headeer);
    document.body.appendChild(mainContainer);
}
