//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/



var naviElem = document.getElementsByClassName('navi');

//console.log(naviElem);

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

var nameElem = document.getElementsByClassName('name');

//console.log(nameElem);

for (var i=0;i<nameElem.length;i++){
    nameElem[i].addEventListener('click', showMenu)
}

function showMenu(){
    //console.log(this.innerHTML)
    var menuContent = this.querySelectorAll('.menu')[0];
    if(menuContent.style.display === 'block'){
        menuContent.style.display = 'none';
    }else{
        menuContent.style.display = 'block';
    }

}



/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
