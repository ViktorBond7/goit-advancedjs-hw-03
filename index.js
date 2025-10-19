(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c="41712066-bd7b5e249df7a86bd45ef70ea",l="https://pixabay.com/api/",d={key:c,image_type:"photo",orientation:"horizontal",safesearch:!0},m=s=>{const r=s.trim();if(!r)throw new Error("Query is empty");const a=new URLSearchParams({...d,q:r}),n=`${l}?${a.toString()}`;return fetch(n).then(e=>{if(e.ok)return e.json();throw new Error(e.status)})},u=s=>`<li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img
        class="gallery-image"
        src="${s.webformatURL}"
        alt="${s.tags}"
        />
    </a>
    <div class="container-description-img">
        <div class="description-item">
          <span class="img-label">likes</span>
          <span class="img-value">${s.likes}</span>
        </div>
        <div class="description-item">
          <span class="img-label">views</span>
          <span class="img-value">${s.views}</span>
        </div>
         <div class="description-item">
          <span class="img-label">comments</span>
          <span class="img-value">${s.comments}</span>
        </div>
           <div class="description-item">
          <span class="img-label">downloads</span>
          <span class="img-value">${s.downloads}</span>
        </div>
    </div>
  </li>
  `,o={listImg:document.querySelector(".list-img"),formSearch:document.querySelector(".form")},p=s=>{s.preventDefault();const r=s.target.elements.data.value;m(r).then(a=>{const n=a.hits.map(e=>u(e)).join("");o.listImg.innerHTML=n}).catch(a=>console.log(a.status))};o.formSearch.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
