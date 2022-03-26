const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const productName = storeItems.getElementsByTagName('h6');

    for (var i = 0; i < productName.length; i++){
        let match = document.getElementsByTagName('h6')[0];

        if(match){
           let textValue = match.textContent || match.innerHTML;

            if (textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = '';
            } else{
                product[i].style.display = 'none';
            }
        }
    }
}



// function search() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search-item");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("product-list");
//     li = ul.getElementsByTagName("h6");

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }