function changeImage(id){
    let imagePath = document.getElementById(id).getAttribute('src');
    console.log(imagePath);
    document.getElementById('preference-image').setAttribute('src',imagePath);
}


function changeColor(type,element) {
    let color = document.getElementsByClassName('color-img');
    for (i = 0; i < color.length; i++) {
        color[i].style.border = 'none';
    };
    element.style.border = '1px solid black';
} 