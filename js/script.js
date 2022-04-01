// change product list by clicking button

function changeProductList(type, element){
    let tabs = document.getElementsByClassName('tab-item');
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.background = 'white';
    } ;
    element.style.background = 'rgb(227, 227, 227)'


    document.getElementById(type).style.display = 'grid';
    switch (type){
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

function changeGenderNew(type, element) {
    document.getElementById(type).style.display = 'grid';
    switch (type) {
        case 'men-new':
            document.getElementById('women-new').style.display = 'none';
            break;
        case 'women-new':
            document.getElementById('men-new').style.display = 'none';
            break;
    }

}

function changeGenderWeek(type, element){
    document.getElementById(type).style.display = 'grid';
    switch(type){
        case 'men-week':
            document.getElementById('women-week').style.display = 'none';
            break;
        case 'women-week':
            document.getElementById('men-week').style.display = 'none';
            break;
    }

}

