import './style.scss'


let ShortLinkInp = document.getElementById("ShortLinkInp");
let ShortLinkBtn = document.getElementById("ShortLinkClick");

let takuku;
takuku = `https://`+ShortLinkInp.value+"@takuku.com";


ShortLinkBtn.addEventListener("click",function (a) {

    let SlowLink = document.getElementById("ShowList");

    SlowLink.innerHTML += `<div class="my-3 bg-white p-3 d-flex justify-content-between align-items-center">
                              <p class="m-0">https://${ShortLinkInp.value}@.com</p>
                    
                    
                              <div class="d-flex">
                                <p class="m-0 text-primary m-0 align-self-center">${takuku}</p>
                                <button class="btn btn-primary ms-4">Copy</button>
                              </div>
                    
                    
                            </div>`

   console.log(takuku);

   ShortLinkInp.value = "";
    a.preventDefault();

});

