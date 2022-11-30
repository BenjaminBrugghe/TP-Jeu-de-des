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

      let tableauDeScores: number[] = [];

      let scoreMaximum: number = 0;
      let gagnantDeLaManche!: Joueur;

      joueurs.forEach((nouveauJoueur) => {
        nouveauJoueur = new Joueur(nouveauJoueur.nomJoueur);
        nouveauJoueur.afficherScoreDuJoueur(nouveauJoueur, joueurs.length);

        if (nouveauJoueur.scoreJoueur > scoreMaximum) {
          gagnantDeLaManche = nouveauJoueur;
          scoreMaximum = nouveauJoueur.scoreJoueur;
        }

        // *** Rajouter le cas où plusieurs joueurs obtiennent le même score ***
      });
      this.afficherGagnantDeLaManche(gagnantDeLaManche); // A mettre dans index.ts ?
    }
  }

  /**
   * Affiche le nom du gagnant de la manche sous forme de String dans un Console.log
   * @param gagnantDeLaManche le gagnant de la manche
   */
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
