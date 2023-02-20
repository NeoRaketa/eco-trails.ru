const search = document.querySelector("#search");
search.addEventListener("click", () => {
  document.querySelector("#search").hidden = true;
  document
    .querySelector("#icon-navigation")
    .insertAdjacentHTML(
      "beforebegin",
      '<li id="cont-search" class="container-icon-search"><img class="icon-header search-temp" id="search-temp" src="./img/search-black.svg" alt="search"><input class="searcharea" type="text" ></li>'
    );
  document.querySelector(".otstup-icon-search").hidden = false;
  document.querySelector(".line-location").hidden = true;

  const TempSearch = document.querySelector("#search-temp");
  TempSearch.addEventListener("click", () => {
    document.querySelector("#cont-search").remove();
    document.querySelector("#search").hidden = false;
    document.querySelector(".otstup-icon-search").hidden = true;
    document.querySelector(".line-location").hidden = false;
  });
});

//     if(event.target.className = 'search') k++; console.log(k);
//      if(k%2==0){
//          console.log(document.querySelector("#cont-search"));
//          document.querySelector("#cont-search").remove()
//      }
//      else{
//         document.querySelector("#icon-navigation").insertAdjacentHTML("beforebegin",'<li id="cont-search" class="container-icon-search"><img class="icon-header" id="search" src="./img/search-white.svg" alt="search"><input class="searcharea" type="text" placehalder="Поиск"></li>')
//      }
// })
