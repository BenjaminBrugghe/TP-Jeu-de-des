import Joueur from "./Classes/Joueur";
import Partie from "./Classes/Partie";

let nouvellePartie: Partie = new Partie();

const joueur1: Joueur = new Joueur("Joueur 1");
const joueur2: Joueur = new Joueur("Joueur 2");
const joueur3: Joueur = new Joueur("Joueur 3");

nouvellePartie.lancerPartie(4, joueur1, joueur2, joueur3);

nouvellePartie.afficherGagnantDeLaPartie(joueur1, joueur2, joueur3);
