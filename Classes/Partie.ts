import Gobelet from "./Gobelet";
import Joueur from "./Joueur";

class Partie {
  // Attributs
  private _nombreDeManches!: number;
  // Instances de classes
  gobelet: Gobelet = new Gobelet();

  // Getter
  public get nombreDeManches(): number {
    return this._nombreDeManches;
  }

  // Setter
  public set nombreDeManches(nombre: number) {
    this._nombreDeManches = nombre;
  }

  // Méthodes
  /**
   * *** Ne sert à rien pour le moment ***
   */
  public initialiserPartie(): void {
    this.nombreDeManches = 4;
    const joueur1: Joueur = new Joueur("Joueur 1");
    const joueur2: Joueur = new Joueur("Joueur 2");
    const joueur3: Joueur = new Joueur("Joueur 3");
  }

  /**
   * Lance la partie, affiche le score de chaque joueur et le vainqueur pour chaque manche
   * @param nombreManches le nombre de manches qu'on veut jouer
   * @param joueurs les joueurs pour la partie
   */
  public lancerPartie(nombreManches: number, ...joueurs: Joueur[]): void {
    for (let i = 1; i <= nombreManches; i++) {
      console.log(`\nManche n°${i} :`);

      let tableauDeVainqueurs: Joueur[] = [];
      let scoreMaximum: number = 0;
      let gagnantDeLaManche!: Joueur;

      // Je fais jouer chaque joueur 1 par 1
      joueurs.forEach((joueur) => {
        joueur.afficherScoreDuJoueur(joueur, joueurs.length);

        // Je rajoute les plus grands scores dans un tableau de vainqueurs
        if (joueur.score >= scoreMaximum) {
          tableauDeVainqueurs.push(joueur);
          scoreMaximum = joueur.score;
        }

        // S'il y a plusieurs vainqueurs
        if (tableauDeVainqueurs.length > 1) {
          gagnantDeLaManche = this.verifierScoresIdentiques(
            tableauDeVainqueurs,
            gagnantDeLaManche
          );
        } else {
          // S'il n'y a qu'un seul vainqueur
          gagnantDeLaManche = tableauDeVainqueurs[0];
        }
      });

      // Je rajoute 1 au nombre de manche(s) gagnée(s) du vainqueur
      gagnantDeLaManche.nombreDeMancheGagnee =
        gagnantDeLaManche.nombreDeMancheGagnee + 1;

      // J'affiche le gagnant de la manche
      this.afficherGagnantDeLaManche(gagnantDeLaManche);
    }
  }

  /**
   * Vérifie si plusieurs joueurs obtiennent le même score pour une manche,
   * simule une nouvelle manche pour les départager et retourne le gagnant
   * @param tableauDeVainqueurs tableau contenant les plus grands scores
   * @param gagnantDeLaManche le gagnant de la manche (non initialisé)
   * @returns le gagnant de la manche
   */
  private verifierScoresIdentiques(
    tableauDeVainqueurs: Joueur[],
    gagnantDeLaManche: Joueur
  ): Joueur {
    let plusGrandScoreDuTableau: number = 0;
    tableauDeVainqueurs.forEach((vainqueur) => {
      if (vainqueur.score > plusGrandScoreDuTableau) {
        plusGrandScoreDuTableau = vainqueur.score;
        gagnantDeLaManche = vainqueur;
      } else if (vainqueur.score == plusGrandScoreDuTableau) {
        // Je lance un random "1 ou 2" pour simuler une relance des dés entre les vainqueurs
        let random: number = Math.floor(Math.random() * 2 + 1); // => 1 ou 2
        if (random == 1) {
          gagnantDeLaManche = vainqueur;
        }
      }
    });
    return gagnantDeLaManche;
  }

  /**
   * Affiche qui a gagné la manche en cours, et son nombre de victoires totales sous forme de String dans un Console.log
   * @param gagnantDeLaManche le gagnant de la manche en cours
   */
  private afficherGagnantDeLaManche(gagnantDeLaManche: Joueur): void {
    console.log(`${gagnantDeLaManche.nom} a gagné cette manche !`);
    console.log(
      `${gagnantDeLaManche.nom} a déjà gagné ${gagnantDeLaManche.nombreDeMancheGagnee} manche(s) !`
    );
  }

  /**
   * Compare le nombre de manches gagnées par chaque joueur.
   * Si égalité, simule une nouvelle manche et affiche le gagnant sous forme de String dans un Console.log
   * @param joueurs les joueurs de la partie
   */
  public afficherGagnantDeLaPartie(...joueurs: Joueur[]): void {
    let gagnantDeLaPartie!: Joueur;
    let scoreMax: number = 0;

    joueurs.forEach((joueur) => {
      if (joueur.nombreDeMancheGagnee > scoreMax) {
        scoreMax = joueur.nombreDeMancheGagnee;
        gagnantDeLaPartie = joueur;
      } else if (joueur.nombreDeMancheGagnee == scoreMax) {
        // Je lance un random "1 ou 2" pour simuler une relance des dés entre les vainqueurs
        let random: number = Math.floor(Math.random() * 2 + 1); // => 1 ou 2
        if (random == 1) {
          gagnantDeLaPartie = joueur;
        }
      }
    });

    // Affichage du nombre de manche(s) gagnée(s) par chaque joueur
    console.log("---");
    joueurs.forEach((joueur) => {
      console.log(
        `Nombre de manche(s) gagnée(s) par ${joueur.nom} : ${joueur.nombreDeMancheGagnee}`
      );
    });

    // Affichage du grand gagnant
    console.log(`\nLe grand gagnant de la partie est ${gagnantDeLaPartie.nom}`);
  }
}

export default Partie;
