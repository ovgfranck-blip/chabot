# Mon travail

Prénom ou membres du binôme : N'SOUGAN Adjovi Péniel; Sawadogo Peegdwende Franck; Rosalie EBONDO; keita Gaoussou; Merzouk Youcene

Nom du chatbot : Akio

## 01 Le chemin d’un message

Expliquez en quatre à six phrases ce qui se passe entre l’activation du bouton Envoyer et l’affichage de la réponse.

Votre réponse : Quand je clique sur « Envoyer », le navigateur lance la fonction `envoyerMessage` grace a l'ecouteur de clic. La fonction prend ce que j'ai ecrit dans le champ et enleve les espaces et les majuscules avec `trim()` et `toLowerCase()`. Si le champ est vide, elle affiche une erreur et s'arrete. Sinon, elle envoie le texte a `choisirReponse` qui me donne la reponse du chatbot. Ensuite, le compteur augmente de 1 et mon message et la reponse s'affichent dans l'historique. A la fin, le champ est efface pour pouvoir ecrire un autre message.

## 02 Les variables et les objets

Quelle variable est réaffectée ? Pourquoi les références aux éléments peuvent-elles être déclarées avec const ? Quelles propriétés de votre objet chatbot utilisez-vous ?

Votre réponse : La variable qui change est `compteur`. Je l'ai declaree avec `let` parce qu'elle augmente de 1 a chaque message et qu'elle revient a 0 quand on clique sur « Recommencer ». Les elements de la page (le champ, l'historique, le compteur...) sont declares avec `const` parce que la variable ne change jamais : elle pointe toujours vers le meme element. Moi je change juste ce qu'il y a dedans avec `textContent` ou `value`, donc je ne reaffecte rien. Dans mon objet `chatbot`, j'utilise `nom` pour la reponse a « bonjour » et `accueil` pour le message de depart.

## 03 Les fonctions

Quel est le paramètre de choisirReponse ? Que renvoie cette fonction ? Pourquoi est-il utile de séparer le choix de la réponse de l’affichage ?

Votre réponse : Le parametre de `choisirReponse` s'appelle `texte`. C'est le message de l'utilisateur, deja nettoye (sans espaces et en minuscules). La fonction renvoie avec `return` une phrase : la reponse du chatbot, ou « Message non reconnu » si le mot n'existe pas. C'est utile de separer le choix de la reponse et l'affichage parce que chaque fonction fait une seule chose. Si je veux changer une reponse, je ne touche pas a l'affichage, et si j'ai une erreur c'est plus facile de trouver d'ou elle vient.

## 04 Une difficulté rencontrée

Décrivez l’observation, votre hypothèse, votre vérification et la correction effectuée.

Votre réponse :
Observation : quand je cliquais sur « Envoyer », il ne se passait rien. Mon message n'apparaissait pas et la reponse ne changeait pas.
Hypothese : je pensais que le JavaScript n'etait pas bien relie a ma page, ou qu'il y avait une faute dans mon code.
Verification : j'ai ouvert la console avec F12 et j'ai regarde l'erreur : [recopiez ici le message exact]. Puis j'ai relu mon code et j'ai vu que mes fonctions etaient ecrites les unes dans les autres, et que je n'utilisais pas les memes noms de variables partout (par exemple `champSaisie` et `saisie`).
Correction : j'ai ajoute les `document.getElementById` pour recuperer les elements, j'ai sorti les fonctions pour qu'elles ne soient plus dans les autres, j'ai mis les memes noms de variables partout et j'ai declare `compteur` avec `let`. Apres ca, le bouton marchait.

## 05 Vos vérifications

- [ ] Les cinq mots-clés ont été testés.
- [ ] Une saisie avec espaces et majuscules a été testée.
- [ ] Le message inconnu et la saisie vide ont été testés.
- [ ] Le compteur et la remise à zéro ont été testés.
- [ ] Les commandes au clavier et une fenêtre étroite ont été testées.
- [ ] La console ne présente pas d’erreur pendant ces essais.

Ce qui fonctionne : les cinq mots-cles donnent la bonne reponse, ca marche meme avec des espaces et des majuscules, l'erreur s'affiche quand le champ est vide, tous les messages restent dans l'historique, le compteur augmente et « Recommencer » remet tout a zero.

Ce qui reste à terminer : le compteur augmente aussi quand le mot n'est pas reconnu (par exemple « xyz »). Il faudrait qu'il compte seulement les vrais mots-cles.