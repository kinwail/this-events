//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/



var naviElem = document.querySelectorAll('.navi');


for (var i =0;i<naviElem.length;i++ ){
naviElem[i].addEventListener('click', showContents);
}

function showContents(){
    var contents = this.querySelectorAll('.inner')[0];
    if (contents.style.display === 'block'){
        contents.style.display = 'none';
    }else{
        contents.style.display = 'block';
    }
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
