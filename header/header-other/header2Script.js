const popular = document.querySelector("#popular-cont");
const cotalog = document.querySelector("#cotalog-cont");
const faq = document.querySelector("#FAQ-cont");
const header = document.querySelector("header");

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
  console.log(event.target.className);
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
        document.querySelector("#logo-picture-color").style.stroke = "#1F271B";
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
        document.querySelector("#logo-picture-color").style.stroke = "#1F271B";
        break;
      }
      case "header-text-last": {
        popular.style.color = "#1F271B";
        faq.style.color = "#F19953";
        cotalog.style.color = "#1F271B";
        faq.removeEventListener("mouseout", HiddAnimFAQ);
        HiddAnimPop();
        popular.addEventListener("mouseout", HiddAnimPop);
        HiddAnimCot();
        cotalog.addEventListener("mouseout", HiddAnimCot);
        document.querySelector("#logo-picture-color").style.stroke = "#1F271B";
        break;
      }
      case "icon-header": {
        popular.style.color = "#1F271B";
        faq.style.color = "#1F271B";
        cotalog.style.color = "#1F271B";
        HiddAnimPop();
        popular.addEventListener("mouseout", HiddAnimPop);
        HiddAnimFAQ();
        faq.addEventListener("mouseout", HiddAnimFAQ);
        HiddAnimCot();
        cotalog.addEventListener("mouseout", HiddAnimCot);
        document.querySelector("#logo-picture-color").style.stroke = "#1F271B";
      }
    }
  if (event.target.tagName === "svg") {
    document.querySelector("#logo-picture-color").style.stroke = "#F19953";
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
};
