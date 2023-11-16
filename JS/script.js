// membuka sidebar dengan menekan ikon menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghaluskan scroll dan menghapus default href=# untuk kembali ke home
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// klik diluar sidebar untuk menghilangkan sidebar
const menu = document.querySelector("#menu-icon");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contain) {
    navbarNav.classList.remove("active");
  }
});

// preview box, tekan gambar untuk info lebih lanjut
const prevbec = document.querySelector("#bec");
const detailbec = document.querySelector(".detail-bec");
const prevelfast = document.querySelector("#elfast");
const detailelfast = document.querySelector(".detail-elfast");
const previnterpeace = document.querySelector("#interpeace");
const detailinterpiece = document.querySelector(".detail-interpeace");
const prevpeace = document.querySelector("#peace");
const detailpeace = document.querySelector(".detail-peace");
const prevkresna = document.querySelector("#kresna");
const detailkresna = document.querySelector(".detail-kresna");
const prevdaffodils = document.querySelector("#daffodils");
const detaildaffodils = document.querySelector(".detail-daffodils");
const preveecc = document.querySelector("#eecc");
const detaileecc = document.querySelector(".detail-eecc");
const prevge = document.querySelector("#ge");
const detailge = document.querySelector(".detail-ge");
const prevhec = document.querySelector("#hec");
const detailhec = document.querySelector(".detail-hec");
const prevcontainer = document.querySelector(".preview-container");

detailbec.onclick = (e) => {
  prevbec.style.display = "flex";
  e.preventDefault();
};
detailelfast.onclick = (e) => {
  prevelfast.style.display = "flex";
  e.preventDefault();
};
detailinterpiece.onclick = (e) => {
  previnterpeace.style.display = "flex";
  e.preventDefault();
};
detailpeace.onclick = (e) => {
  prevpeace.style.display = "flex";
  e.preventDefault();
};
detailkresna.onclick = (e) => {
  prevkresna.style.display = "flex";
  e.preventDefault();
};
detaildaffodils.onclick = (e) => {
  prevdaffodils.style.display = "flex";
  e.preventDefault();
};
detaileecc.onclick = (e) => {
  preveecc.style.display = "flex";
  e.preventDefault();
};
detailge.onclick = (e) => {
  prevge.style.display = "flex";
  e.preventDefault();
};
detailhec.onclick = (e) => {
  prevhec.style.display = "flex";
  e.preventDefault();
};

//close (X) preview box
document.querySelector(".bec .close-icon").onclick = (e) => {
  prevbec.style.display = "none";
  e.preventDefault();
};
document.querySelector(".elfast .close-icon").onclick = (e) => {
  prevelfast.style.display = "none";
  e.preventDefault();
};
document.querySelector(".interpeace .close-icon").onclick = (e) => {
  previnterpeace.style.display = "none";
  e.preventDefault();
};
document.querySelector(".peace .close-icon").onclick = (e) => {
  prevpeace.style.display = "none";
  e.preventDefault();
};
document.querySelector(".kresna .close-icon").onclick = (e) => {
  prevkresna.style.display = "none";
  e.preventDefault();
};
document.querySelector(".daffodils .close-icon").onclick = (e) => {
  prevdaffodils.style.display = "none";
  e.preventDefault();
};
document.querySelector(".eecc .close-icon").onclick = (e) => {
  preveecc.style.display = "none";
  e.preventDefault();
};
document.querySelector(".ge .close-icon").onclick = (e) => {
  prevge.style.display = "none";
  e.preventDefault();
};
document.querySelector(".hec .close-icon").onclick = (e) => {
  prevhec.style.display = "none";
  e.preventDefault();
};
document.addEventListener("click", function (e) {
  if (!prevcontainer.contains(e.target)) {
    prevcontainer.classList.remove("active");
  }
});
