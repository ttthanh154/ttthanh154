function changeImage(id){
    let imagePath = document.getElementById(id).getAttribute('src');
    console.log(imagePath);
    document.getElementById('preference-image').setAttribute('src',imagePath);
}