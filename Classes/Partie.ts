import Gobelet from "./Gobelet";
import Joueur from "./Joueur";

class Partie {
  // Attributs
  private _nombreDeManches!: number;

  // Setter
  public set nombreDeManches(nombre: number) {
    this._nombreDeManches = nombre;
  }

  // Instances de classes
  gobelet: Gobelet = new Gobelet();

  // Méthodes
  /**
   * Initialise le nombre de joueurs et de manches pour la partie
   */
  public initialiserPartie(): void {
    this.nombreDeManches = 4;
    const joueur1: Joueur = new Joueur("Joueur 1");
    const joueur2: Joueur = new Joueur("Joueur 2");
    const joueur3: Joueur = new Joueur("Joueur 3");
  }

  /**
   * Lance la partie
   * @param nombreManches le nombre de manches dans la partie
   * @param joueurs le nombre de joueurs
   */
  public lancerPartie(nombreManches: number, ...joueurs: Joueur[]): void {
    for (let i = 1; i <= nombreManches; i++) {
      console.log(`\nManche n°${i} :`);

      let tableauDeVainqueurs: Joueur[] = [];
      let tableauDeJoueurs: Joueur[] = [];

      let scoreMaximum: number = 0;
      let gagnantDeLaManche!: Joueur;

      // Je fais jouer chaque joueur 1 par 1
      joueurs.forEach((joueur) => {
        joueur = new Joueur(joueur.nomJoueur);
        joueur.afficherScoreDuJoueur(joueur, joueurs.length);

        // Je rajoute les plus grands scores dans un tableau de vainqueurs
        if (joueur.scoreJoueur >= scoreMaximum) {
          tableauDeVainqueurs.push(joueur);
          scoreMaximum = joueur.scoreJoueur;
        }

        // S'il y a plusieurs vainqueurs
        if (tableauDeVainqueurs.length > 1) {
          let plusGrandScoreDuTableau: number = 0;

          // Je vérifie s'il y a plusieurs scores identiques
          tableauDeVainqueurs.forEach((vainqueur) => {
            if (vainqueur.scoreJoueur > plusGrandScoreDuTableau) {
              plusGrandScoreDuTableau = vainqueur.scoreJoueur;
              gagnantDeLaManche = vainqueur;
            } else if (vainqueur.scoreJoueur == plusGrandScoreDuTableau) {
              // Je lance un random "1 ou 2" pour simuler une relance des dés entre les vainqueurs
              let random: number = Math.floor(Math.random() * 2 + 1); // => 1 ou 2
              if (random == 1) {
                gagnantDeLaManche = vainqueur;
              }
            }
          });
        } else {
          // S'il n'y a qu'un seul vainqueur
          gagnantDeLaManche = tableauDeVainqueurs[0];
        }
      });

      this.afficherGagnantDeLaManche(gagnantDeLaManche); // A mettre dans index.ts ?
    }
  }

  private afficherGagnantDeLaManche(gagnantDeLaManche: Joueur): void {
    console.log(`${gagnantDeLaManche.nomJoueur} a gagné cette manche !`);
  }

  public afficherGagnantDeLaPartie(): void {
    // Rajouter un attribut "nbManchesGagnées" avec get et set
    // Ajouter +1 à chaque fois qu'un joueur gagne
    // Comparer ces valeurs pour déterminer le gagnant de la partie
  }
}

export default Partie;
