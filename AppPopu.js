const seeBnt1 = document.querySelector('.see-project1');
const popup1 = document.querySelector('.popup1');

const seeBnt2 = document.querySelector('.see-project2');
const popup2 = document.querySelector('.popup2');

const seeBnt3 = document.querySelector('.see-project3');
const popup3 = document.querySelector('.popup3');

const seeBnt4 = document.querySelector('.see-project4');
const popup4 = document.querySelector('.popup4');

const fermer1 = document.querySelector('.fermer1');
const fermer2 = document.querySelector('.fermer2');
const fermer3 = document.querySelector('.fermer3');
const fermer4 = document.querySelector('.fermer4');
;



let MyProject = [{
  Name: "Tonic",
  Image: 'Snapshoot1.png',
  Image2:'Snapshoot11.png',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
liveLink:'#',
sourceLink:'#',
factorypopup1:"CANOPY",
flex1langpopup1:"back End",
flex1langpopup2:"2015",
},
{
  Name: "Muti-Post Stories",
  Image: 'Snapshoot2.png',
  Image2:'Snapshoot4.png',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
liveLink:'#',
sourceLink:'#',
factorypopup1:"CANOPY",
flex1langpopup1:"back End",
flex1langpopup2:"2015",
},
{
  Name: "Facebook 360",
  Image: 'Snapshoot3.png',
  Image2:'Snapshoot1.png',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
liveLink:'#',
sourceLink:'#',
factorypopup1:"CANOPY",
flex1langpopup1:"back End",
flex1langpopup2:"2015",
},
{
  Name: "uber Navigation",
  Image: 'Snapshoot4.png',
  Image2:'Snapshoot2.png',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
liveLink:'#',
sourceLink:'#',
factorypopup1:"CANOPY",
flex1langpopup1:"back End",
flex1langpopup2:"2015",
}
];


seeBnt1.addEventListener('click', () => {
  popup1.style.display = 'block';
  document.querySelector(".textpop").innerHTML = MyProject[0].Name;
  document.querySelector(".tonic1popup1-text").innerHTML = MyProject[0].description;
  document.querySelector(".liveLink").href=MyProject[0].liveLink;
  document.querySelector(".sourceLink").href=MyProject[0].sourceLink;
  document.querySelector(".factorypopup1").innerHTML=MyProject[0].factorypopup1;
  document.querySelector(".flex1-langpopup1").innerHTML=MyProject[0].flex1langpopup1;
  document.querySelector(".flex1-langpopup2").innerHTML=MyProject[0].flex1langpopup2


  document.querySelector(".fontimg1popup1").src=MyProject[0].Image;
  document.querySelector(".fontimg2popup1").src=MyProject[0].Image2

});



seeBnt2.addEventListener('click', () => {
  popup1.style.display = 'block';
  document.querySelector(".textpop").innerHTML = MyProject[1].Name;
  document.querySelector(".tonic1popup1-text").innerHTML = MyProject[1].description;
  document.querySelector(".liveLink").href=MyProject[1].liveLink;
  document.querySelector(".sourceLink").href=MyProject[1].sourceLink;
  document.querySelector(".factorypopup1").innerHTML=MyProject[1].factorypopup1;
  document.querySelector(".flex1-langpopup1").innerHTML=MyProject[1].flex1langpopup1;
  document.querySelector(".flex1-langpopup2").innerHTML=MyProject[1].flex1langpopup2


  document.querySelector(".fontimg1popup1").src=MyProject[1].Image;
  document.querySelector(".fontimg2popup1").src=MyProject[1].Image2

});


seeBnt3.addEventListener('click', () => {
  popup1.style.display = 'block';
  document.querySelector(".textpop").innerHTML = MyProject[2].Name;
  document.querySelector(".tonic1popup1-text").innerHTML = MyProject[2].description;
  document.querySelector(".liveLink").href=MyProject[2].liveLink;
  document.querySelector(".sourceLink").href=MyProject[2].sourceLink;
  document.querySelector(".factorypopup1").innerHTML=MyProject[2].factorypopup1;
  document.querySelector(".flex1-langpopup1").innerHTML=MyProject[2].flex1langpopup1;
  document.querySelector(".flex1-langpopup2").innerHTML=MyProject[2].flex1langpopup2


  document.querySelector(".fontimg1popup1").src=MyProject[2].Image;
  document.querySelector(".fontimg2popup1").src=MyProject[2].Image2

});

seeBnt4.addEventListener('click', () => {
  popup1.style.display = 'block';
  document.querySelector(".textpop").innerHTML = MyProject[3].Name;
  document.querySelector(".tonic1popup1-text").innerHTML = MyProject[3].description;
  document.querySelector(".liveLink").href=MyProject[3].liveLink;
  document.querySelector(".sourceLink").href=MyProject[3].sourceLink;
  document.querySelector(".factorypopup1").innerHTML=MyProject[2].factorypopup1;
  document.querySelector(".flex1-langpopup1").innerHTML=MyProject[3].flex1langpopup1;
  document.querySelector(".flex1-langpopup2").innerHTML=MyProject[3].flex1langpopup2


  document.querySelector(".fontimg1popup1").src=MyProject[3].Image;
  document.querySelector(".fontimg2popup1").src=MyProject[3].Image2

});








// seeBnt2.addEventListener('click', () => {
//   popup2.style.display = 'block';
//   document.querySelector(".textpop").innerHTML = MyProject[1].Name;
//   document.querySelector(".tonic1popup1-text").innerHTML = MyProject[1].description;
//   document.querySelector(".liveLink").href=MyProject[1].liveLink;
//   document.querySelector(".sourceLink").href=MyProject[1].sourceLink;
//   document.querySelector(".factorypopup1").innerHTML=MyProject[1].factorypopup1;
//   document.querySelector(".flex1-langpopup1").innerHTML=MyProject[1].flex1langpopup1;
//   document.querySelector(".flex1-langpopup2").innerHTML=MyProject[1].flex1langpopup2
// });

// seeBnt3.addEventListener('click', () => {
//      popup3.style.display = 'block';
//      document.querySelector(".textpop").innerHTML = MyProject[2].Name;
//   document.querySelector(".tonic1popup1-text").innerHTML = MyProject[2].description;
//   document.querySelector(".liveLink").href=MyProject[2].liveLink;
//   document.querySelector(".sourceLink").href=MyProject[2].sourceLink;
//   document.querySelector(".factorypopup1").innerHTML=MyProject[2].factorypopup1;
//   document.querySelector(".flex1-langpopup1").innerHTML=MyProject[2].flex1langpopup1;
//   document.querySelector(".flex1-langpopup2").innerHTML=MyProject[2].flex1langpopup2
// });


// seeBnt4.addEventListener('click', () => {
//   popup4.style.display = 'block';
//   document.querySelector(".textpop").innerHTML = MyProject[3].Name;
// document.querySelector(".tonic1popup1-text").innerHTML = MyProject[3].description;
// document.querySelector(".liveLink").href=MyProject[3].liveLink;
// document.querySelector(".sourceLink").href=MyProject[3].sourceLink;
// document.querySelector(".factorypopup1").innerHTML=MyProject[3].factorypopup1;
// document.querySelector(".flex1-langpopup1").innerHTML=MyProject[3].flex1langpopup1;
// document.querySelector(".flex1-langpopup2").innerHTML=MyProject[3].flex1langpopup2
// });



fermer1.addEventListener('click', () => {
  popup1.style.display = 'none';

})

fermer2.addEventListener('click', () => {
  popup2.style.display = 'none';
})


fermer3.addEventListener('click', () => {
  popup3.style.display = 'none';
})


fermer4.addEventListener('click', () => {
  popup4.style.display = 'none';

})



//##################################################################



// const MyProject = [
//   {
//     name: "Tonic",
//     factory:'CANOPY',
//     post:'back End',
//     year:'2015',
//     image1: "Snapshoot1.png",
//     image2: "Snapshoot11.png",
//     Ptextpopup:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
//     lang1:"html",
//     lang2:"css",
//     lang3:"javascript",
//     lang4:"github",
//     lang5:"ruby",
//     lang6:"bootstraps",
//     liveLink: "#",
//     sourceLink: "#"
//   },
// ]

// function showproject(){
//   const popup1 = document.querySelector('.popup1');
//   const textpop=document.querySelector('.textpop');
//   // const factorypopup1=document.querySelector('.factorypopup1');
//   // const flex1langpopup1 = document.querySelector('.flex1-langpopup1');
//   // const flex1langpopup2 = document.querySelector('.flex1-langpopup1');
//   // const fontimg1popup1 = document.querySelector('.fontimg1popup1');
//   // const fontimg2popup1 =document.querySelector('.fontimg2popup1');
//   // const tonic1popup1text = document.querySelector('.tonic1popup1-text');
  
//   // const langtech1 = document.querySelector('.languagepopup1');
//   // // const langtech2 = document.querySelector('.languagepopup1');
//   // const langtech3 = document.querySelector('.languagepopup1');
//   // const langtech4 = document.querySelector('.languagepopup1');
//   // const langtech5 = document.querySelector('.languagepopup1');
//   // const langtech6 = document.querySelector('.languagepopup1');

// textpop.textContent = MyProject.name;
// // factorypopup1.textContent = MyProject.factory;
// // flex1langpopup1.textContent=MyProject.post;
// // flex1langpopup2.textContent=MyProject.year;
// // fontimg1popup1.scr=MyProject.image1;
// // fontimg2popup1.scr=MyProject.image2;
// // tonic1popup1text.textContent=MyProject.Ptextpopup
// // langtech1.textContent=MyProject.lang1
// // langtech2.textContent=MyProject.lang2
// // langtech3.textContent=MyProject.lang3
// // langtech4.textContent=MyProject.lang4
// // langtech5.textContent=MyProject.lang5
// // langtech6.textContent=MyProject.lang6

// popup1.style.display = "block";
  
// };

// function hidden(){
//   const popup1 = document.querySelector('.popup1');
//   popup1.style.display = "none";
// }


// const projectButtons = document.querySelector(".see-project1");


// // projectButtons.forEach(button => {
// //   const projectIndex = button.dataset.index;
// //   const project =  MyProject[projectIndex];

//   projectButtons.addEventListener("click", () => {
//     showproject(MyProject);
//   });
// // });

// const closeButton = document.querySelector('.fermer1');

// closeButton.addEventListener("click", () => {
//   hidden();
// });
