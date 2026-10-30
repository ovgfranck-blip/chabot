const chatbot = {
  nom: "Akio",
  accueil: "🦊 Salut, voyageur ! Je suis Akio, ton guide du Web. Écris « aide » pour commencer."
};

const champSaisie = document.getElementById("champ-message");
const boutonEnvoyer = document.getElementById("bouton-envoyer");
const boutonRecommencer = document.getElementById("bouton-recommencer");
const zoneErreur = document.getElementById("retour-utilisateur");
const historique = document.getElementById("historique");
const zoneCompteur = document.getElementById("compteur-messages");

let compteur = 0;

function choisirReponse(texte) {

  if (texte === "bonjour") {
    return "🦊 Bonjour ! Je suis " + chatbot.nom + ", ton guide du développement Web.";
  } else if (texte === "aide") {
    return "🧭 Écris un mot, puis clique sur Envoyer. Mots-clés : bonjour, aide, html, css, javascript.";
  } else if (texte === "html") {
    return "🦴 HTML est le squelette de la page : titres, textes, champs et boutons.";
  } else if (texte === "css") {
    return "🎨 CSS est le styliste de la page : couleurs, polices et espacements.";
  } else if (texte === "javascript") {
    return "⚡ JavaScript est le cerveau de la page : il réagit aux clics et change l'affichage.";
  } else {
    
    return "🤔 Message non reconnu. Écris « aide » pour voir les mots-clés.";
  }
}

function ajouterMessage(type, titre, texte) {
  const bloc = document.createElement("div");
  bloc.className = "message message--" + type;

  const h2 = document.createElement("h2");
  h2.className = "message__title";
  h2.textContent = titre;

  const p = document.createElement("p");
  p.className = "message__text";
  p.textContent = texte;

  bloc.appendChild(h2);
  bloc.appendChild(p);
  historique.appendChild(bloc);

  historique.scrollTop = historique.scrollHeight;
}

function envoyerMessage() {
  const texteOriginal = champSaisie.value;
  const texteComparaison = texteOriginal.trim().toLowerCase();

  if (texteComparaison === "") {
    zoneErreur.textContent = "Veuillez écrire un message avant d'envoyer.";
    return;
  }

  const reponse = choisirReponse(texteComparaison);
  compteur = compteur + 1;
  zoneCompteur.textContent = compteur;
  ajouterMessage("user", "Message envoyé", texteOriginal.trim());
  ajouterMessage("bot", "Réponse du chatbot", reponse);

  zoneErreur.textContent = "";
  champSaisie.value = "";
  champSaisie.focus();
}

function recommencer() {
  compteur = 0;
  zoneCompteur.textContent = compteur;
  historique.innerHTML = "";
  ajouterMessage("bot", "Réponse du chatbot", chatbot.accueil);
  zoneErreur.textContent = "";
  champSaisie.value = "";
}

boutonEnvoyer.addEventListener("click", envoyerMessage);
boutonRecommencer.addEventListener("click", recommencer);
champSaisie.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    envoyerMessage();
  }
});

recommencer();