// change product list by clicking button
function changeProductList(type, element){
    let tabs = document.getElementsByClassName('tab-item');
    for(i = 0; i < tabs.length; i++) {
        tabs[i].style.background = 'rgb(162, 5, 5)';
    }
    element.style.background = 'rgb(252, 36, 36)';
    document.getElementById(type).style.display = 'grid';
    switch (type) {
        case 'trend':
            document.getElementById('new').style.display = 'none';
            document.getElementById('best-sale').style.display = 'none';
            break;
        case 'new':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('best-sale').style.display = 'none';
            break;
        case 'best-sale':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('new').style.display = 'none'
            break;
    }
}