
    window.couleur = function(){
  
  
  // tu recuperes les elements a colorier
  var colorInfo = document.getElementById('propos');
  var colorMoi = document.getElementById('formation');
  var colorContact = document.getElementById('projet');
  
  // tu recuperes la hauteur de chaque div, par rapport au top du DOC
  var infosDiv = document.getElementById('A propos');
  var moiDiv = document.getElementById('Formation');
  var contactDiv = document.getElementById('Projets');
  
  // tu recuperes la somme hauteur+offsetTop
  var infosCal = infosDiv.offsetHeight+infosDiv.offsetTop;
  var moiCal = moiDiv.offsetHeight+moiDiv.offsetTop;
  var contactCal = contactDiv.offsetHeight+contactDiv.offsetTop;
  
  var pos = window.scrollY; // tu recuperes ta position verticale au scroll
  
  
  if(pos<infosCal){   
     colorInfo.style.color = 'red';
  } else
          colorInfo.style.color = 'rgba(0,0,0,.15)';
  
  
  if (pos>infosCal && pos<moiCal){
   colorMoi.style.color = 'red';
  } else
          colorMoi.style.color = 'rgba(0,0,0,.15)';
  
  
  if (pos>moiCal && pos<contactCal){
   colorContact.style.color = 'red';
  } else
          colorContact.style.color = 'rgba(0,0,0,.15)';
  
  } // fin fonction couleur
  
  // tu fais tourner ta fonction au scroll
   window.addEventListener("scroll" , couleur);
  
