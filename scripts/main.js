const myImage = document.querySelector("img");

let allImages = ["imagens/crewicon_cap.png", "imagens/crewicon_gun.png", "imagens/crewicon_gam.png",
  "imagens/crewicon_art.png", "imagens/crewicon_sne.png", "imagens/crewicon_cok.png",
  "imagens/crewicon_tma.png",  "imagens/crewicon_cro.png", "imagens/crewicon_doc.png",
  "imagens/crewicon_nav.png", "imagens/paricon.png"
]
let current = 0;

myImage.onclick = () => {
  current++;
  current = current % allImages.length;
  myImage.setAttribute("src", allImages[current]);
  //const mySrc = myImage.getAttribute("src");
  //if (mySrc === "imagens/paricon.png") {
  // myImage.setAttribute("src", "imagens/crewicon_nav.png");
  //} else {
  //  myImage.setAttribute("src", "imagens/paricon.png");
  // }
};