const popular = document.querySelector(".header-text-center");
const cotalog = document.querySelector(".header-text-first");
const faq = document.querySelector(".header-text-last");
const header = document.querySelector("header");

window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};

cotalog.addEventListener("mouseover", DispAnimCotal);
function DispAnimCotal() {
  document.querySelector("#animation1").hidden = false;
}
cotalog.addEventListener("mouseout", HiddAnimCot);
function HiddAnimCot() {
  document.querySelector("#animation1").hidden = true;
}

popular.addEventListener("mouseover", DispAnimPop);
function DispAnimPop() {
  document.querySelector("#animation2").hidden = false;
}
popular.addEventListener("mouseout", HiddAnimPop);
function HiddAnimPop() {
  document.querySelector("#animation2").hidden = true;
}

faq.addEventListener("mouseover", DispAnimFAQ);
function DispAnimFAQ() {
  document.querySelector("#animation3").hidden = false;
}
faq.addEventListener("mouseout", HiddAnimFAQ);
function HiddAnimFAQ() {
  document.querySelector("#animation3").hidden = true;
}

header.onclick = function Test(event) {
  console.log(event.target.tagName, event.target.className);
  if (event.type === "click")
    switch (event.target.className) {
      case "header-text-first": {
        cotalog.style.color = "#F19953";
        popular.style.color = "#ffffff";
        faq.style.color = "#ffffff";
        cotalog.removeEventListener("mouseout", HiddAnimCot);
        HiddAnimFAQ();
        faq.addEventListener("mouseout", HiddAnimFAQ);
        HiddAnimPop();
        popular.addEventListener("mouseout", HiddAnimCot);
        document.querySelector("#logo-picture-color").style.stroke = "#ffffff";
        break;
      }
      case "header-text-center": {
        popular.style.color = "#F19953";
        faq.style.color = "#ffffff";
        cotalog.style.color = "#ffffff";
        popular.removeEventListener("mouseout", HiddAnimPop);
        HiddAnimFAQ();
        faq.addEventListener("mouseout", HiddAnimFAQ);
        HiddAnimCot();
        cotalog.addEventListener("mouseout", HiddAnimCot);
        document.querySelector("#logo-picture-color").style.stroke = "#ffffff";
        break;
      }
      case "header-text-last": {
        popular.style.color = "#ffffff";
        faq.style.color = "#F19953";
        cotalog.style.color = "##ffffff";
        faq.removeEventListener("mouseout", HiddAnimFAQ);
        HiddAnimPop();
        popular.addEventListener("mouseout", HiddAnimPop);
        HiddAnimCot();
        cotalog.addEventListener("mouseout", HiddAnimCot);
        document.querySelector("#logo-picture-color").style.stroke = "#ffffff";
        break;
      }
      case "icon-header":
        {
          popular.style.color = "#ffffff";
          faq.style.color = "#ffffff";
          cotalog.style.color = "#ffffff";
          HiddAnimPop();
          popular.addEventListener("mouseout", HiddAnimPop);
          HiddAnimFAQ();
          faq.addEventListener("mouseout", HiddAnimFAQ);
          HiddAnimCot();
          cotalog.addEventListener("mouseout", HiddAnimCot);
          document.querySelector("#logo-picture-color").style.stroke =
            "#ffffff";
        }
        if (event.target.document.className === "svg") {
          document.querySelector("#logo-picture-color").style.stroke =
            "#F19953";
          popular.style.color = "#ffffff";
          faq.style.color = "#ffffff";
          cotalog.style.color = "#ffffff";
          HiddAnimPop();
          popular.addEventListener("mouseout", HiddAnimPop);
          HiddAnimFAQ();
          faq.addEventListener("mouseout", HiddAnimFAQ);
          HiddAnimCot();
          cotalog.addEventListener("mouseout", HiddAnimCot);
        }
    }
};

const icon_color = document.querySelectorAll(".container-navigation-icon");
const text_center = document.querySelectorAll("#header-text");

window.onscroll = function ScrollHead() {
  var y = window.pageYOffset;
  console.log(y);

  // В  1-ом if регулировка росстояния от top для смены стиля шапки (полупрозрачной))
  if (y < 880) {
    header.style.background = "transparent";
    document.querySelector(".logo-text").style.color = "white";
    if (document.querySelector("#animation1").hidden === false) {
      document.querySelector(".header-text-first").style.color = "#F19953";
      text_center[1].style.color = "white";
      text_center[2].style.color = "white";
    }
    if (document.querySelector("#animation2").hidden === false) {
      document.querySelector(".header-text-center").style.color = "#F19953";
      text_center[0].style.color = "white";
      text_center[2].style.color = "white";
    }
    if (document.querySelector("#animation3").hidden === false) {
      document.querySelector(".header-text-last").style.color = "#F19953";
      text_center[0].style.color = "white";
      text_center[1].style.color = "white";
    }
    if (
      document.querySelector("#animation1").hidden === true &&
      document.querySelector("#animation2").hidden === true &&
      document.querySelector("#animation3").hidden === true
    ) {
      for (let i = 0; i < text_center.length; i++) {
        text_center[i].style.color = "white";
      }
    }
    if (y < 880 || y === 0) {
      icon_color[0].innerHTML =
        '<img class="icon-header" id="search" src="./img/search-white.svg" alt="search-wh">';
      icon_color[1].innerHTML =
        '<div class="container-location"><img class="icon-header" src="./img/map-white.svg" alt="map-bl"><div class="line-location-white"></div></div>';
      icon_color[2].innerHTML =
        '<img class="icon-header"  src="./img/catalog-icon-white.svg" alt="cotalog-wh">';
    }
    document.querySelector("#logo-picture-color").style.stroke = "white";
    header.onclick = function Test(event) {
      console.log(event.target.tagName, event.target.className);
      if (event.type === "click")
        switch (event.target.className) {
          case "header-text-first": {
            cotalog.style.color = "#F19953";
            popular.style.color = "#ffffff";
            faq.style.color = "#ffffff";
            cotalog.removeEventListener("mouseout", HiddAnimCot);
            HiddAnimFAQ();
            faq.addEventListener("mouseout", HiddAnimFAQ);
            HiddAnimPop();
            popular.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#ffffff";
            break;
          }
          case "header-text-center": {
            popular.style.color = "#F19953";
            faq.style.color = "#ffffff";
            cotalog.style.color = "#ffffff";
            popular.removeEventListener("mouseout", HiddAnimPop);
            HiddAnimFAQ();
            faq.addEventListener("mouseout", HiddAnimFAQ);
            HiddAnimCot();
            cotalog.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#ffffff";
            break;
          }
          case "header-text-last": {
            popular.style.color = "#ffffff";
            faq.style.color = "#F19953";
            cotalog.style.color = "##ffffff";
            faq.removeEventListener("mouseout", HiddAnimFAQ);
            HiddAnimPop();
            popular.addEventListener("mouseout", HiddAnimPop);
            HiddAnimCot();
            cotalog.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#ffffff";
            break;
          }
          case "icon-header":
            {
              popular.style.color = "#ffffff";
              faq.style.color = "#ffffff";
              cotalog.style.color = "#ffffff";
              HiddAnimPop();
              popular.addEventListener("mouseout", HiddAnimPop);
              HiddAnimFAQ();
              faq.addEventListener("mouseout", HiddAnimFAQ);
              HiddAnimCot();
              cotalog.addEventListener("mouseout", HiddAnimCot);
              document.querySelector("#logo-picture-color").style.stroke =
                "#ffffff";
            }
            if (event.target.document.className === "svg") {
              document.querySelector("#logo-picture-color").style.stroke =
                "#F19953";
              popular.style.color = "#ffffff";
              faq.style.color = "#ffffff";
              cotalog.style.color = "#ffffff";
              HiddAnimPop();
              popular.addEventListener("mouseout", HiddAnimPop);
              HiddAnimFAQ();
              faq.addEventListener("mouseout", HiddAnimFAQ);
              HiddAnimCot();
              cotalog.addEventListener("mouseout", HiddAnimCot);
            }
        }
    };
  }

  // В  1-ом if регулировка росстояния от top для смены стиля шапки (бежевой)
  if (y > 940) {
    header.style.background = "#f3f6ed";
    document.querySelector(".logo-text").style.color = "black";
    if (document.querySelector("#animation1").hidden === false) {
      document.querySelector(".header-text-first").style.color = "#F19953";
      text_center[1].style.color = "black";
      text_center[2].style.color = "black";
    }
    if (document.querySelector("#animation2").hidden === false) {
      document.querySelector(".header-text-center").style.color = "#F19953";
      text_center[0].style.color = "black";
      text_center[2].style.color = "black";
    }
    if (document.querySelector("#animation3").hidden === false) {
      document.querySelector(".header-text-last").style.color = "#F19953";
      text_center[0].style.color = "black";
      text_center[1].style.color = "black";
    }
    if (
      document.querySelector("#animation1").hidden === true &&
      document.querySelector("#animation2").hidden === true &&
      document.querySelector("#animation3").hidden === true
    ) {
      for (let i = 0; i < text_center.length; i++) {
        text_center[i].style.color = "black";
      }
    }
    if (y > 940 || y === 0) {
      icon_color[0].innerHTML =
        '<img class="icon-header" id="search" src="./img/search-black.svg" alt="search-bl">';
      icon_color[1].innerHTML =
        '<div class="container-location"><img class="icon-header" src="./img/map-black.svg" alt="map-bl"><div class="line-location-black"></div></div>';
      icon_color[2].innerHTML =
        '<img class="icon-header"  src="./img/catalog-icon-black.svg" alt="cotalog-bl">';
      document.querySelector("#logo-picture-color").style.stroke = "black";
    }
    header.onclick = function Test(event) {
      console.log(event.target.tagName, event.target.className);
      if (event.type === "click")
        switch (event.target.className) {
          case "header-text-first": {
            cotalog.style.color = "#F19953";
            popular.style.color = "#1F271B";
            faq.style.color = "#1F271B";
            cotalog.removeEventListener("mouseout", HiddAnimCot);
            HiddAnimFAQ();
            faq.addEventListener("mouseout", HiddAnimFAQ);
            HiddAnimPop();
            popular.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#ffffff";
            break;
          }
          case "header-text-center": {
            popular.style.color = "#F19953";
            faq.style.color = "#1F271B";
            cotalog.style.color = "#1F271B";
            popular.removeEventListener("mouseout", HiddAnimPop);
            HiddAnimFAQ();
            faq.addEventListener("mouseout", HiddAnimFAQ);
            HiddAnimCot();
            cotalog.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#1F271B";
            break;
          }
          case "header-text-last": {
            popular.style.color = "#1F271B";
            faq.style.color = "#F19953";
            cotalog.style.color = "##1F271B";
            faq.removeEventListener("mouseout", HiddAnimFAQ);
            HiddAnimPop();
            popular.addEventListener("mouseout", HiddAnimPop);
            HiddAnimCot();
            cotalog.addEventListener("mouseout", HiddAnimCot);
            document.querySelector("#logo-picture-color").style.stroke =
              "#1F271B";
            break;
          }
          case "icon-header":
            {
              popular.style.color = "#1F271B";
              faq.style.color = "#1F271B";
              cotalog.style.color = "#1F271B";
              HiddAnimPop();
              popular.addEventListener("mouseout", HiddAnimPop);
              HiddAnimFAQ();
              faq.addEventListener("mouseout", HiddAnimFAQ);
              HiddAnimCot();
              cotalog.addEventListener("mouseout", HiddAnimCot);
              document.querySelector("#logo-picture-color").style.stroke =
                "#1F271B";
            }
            if (event.target.document.className === "svg") {
              document.querySelector("#logo-picture-color").style.stroke =
                "#F19953";
              popular.style.color = "#1F271B";
              faq.style.color = "#1F271B";
              cotalog.style.color = "#1F271B";
              HiddAnimPop();
              popular.addEventListener("mouseout", HiddAnimPop);
              HiddAnimFAQ();
              faq.addEventListener("mouseout", HiddAnimFAQ);
              HiddAnimCot();
              cotalog.addEventListener("mouseout", HiddAnimCot);
            }
        }
    };
  }
};
