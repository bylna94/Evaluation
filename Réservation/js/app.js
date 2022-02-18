
// formulaire réservation
let button = document.getElementById('reserver');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let telephone = document.getElementById('telephone');





button.addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('error_nom').innerHTML = ''

  if(nom.value === ""){
    document.getElementById('error_nom').innerHTML = `
    <p class='error'>champ vide !</p>
  `
  }
  else if(nom.value.length < 5 || nom.value.length > 15){
    document.getElementById('error_nom').innerHTML = `
      <p class='error'>Le nom doit contenir au minimum 5 caractères !</p>
    `
  }

});

button.addEventListener('click', (event) => {
    event.preventDefault();
  
    document.getElementById('error_prenom').innerHTML = ''
  
    if(nom.value === ""){
      document.getElementById('error_prenom').innerHTML = `
      <p class='error'>champ vide !</p>
    `
    }
    else if(nom.value.length < 5 || nom.value.length > 15){
      document.getElementById('prenom').innerHTML = `
        <p class='error'>Le nom doit contenir au minimum 5 caractères !</p>
      `
    }
  
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
  
    document.getElementById('error_email').innerHTML = ''
  
    if(nom.value === ""){
      document.getElementById('error_email').innerHTML = `
      <p class='error'>champ vide !</p>
    `
    }
    
  
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
  
    document.getElementById('error_telephone').innerHTML = ''
  
    if(nom.value === ""){
      document.getElementById('error_telephone').innerHTML = `
      <p class='error'>champ vide !</p>
    `
    }
    
  
  });