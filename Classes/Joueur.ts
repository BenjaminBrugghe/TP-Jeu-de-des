import Gobelet from "./Gobelet";

class Joueur {
  // Attributs
  private _nom: string;
  private _score!: number;

  // Constructeur
  constructor(nom: string) {
    this._nom = nom;
  }

  // Getter
  public get scoreJoueur(): number {
    return this._score;
  }

  public get nomJoueur(): string {
    return this._nom;
  }

  // Setter
  public set score(nouveauScore: number) {
    this._score = nouveauScore;
  }

  // Instances de classe
  gobeletDuJoueur: Gobelet = new Gobelet();

  // Méthodes
  /**
   * Lance le gobelet avec tous les dés
   * @param gobelet ?
   * @param nombreDeDes Le nombre total de dés
   * @return Le total du gobelet
   */
  private jouer(gobelet: Gobelet, nombreDeDes: number): number {
    this._score = gobelet.lancer(nombreDeDes);
    return this._score;
  }

  /**
   * Calcule le score du joueur pour la manche en cours, l'affiche sous forme de String dans un Console.log et retourne le score
   * @param joueur un joueur (parmis la liste des joueurs)
   * @param nombreDeDes le nombre total de dés/joueurs
   * @returns le score du joueur
   */
  public afficherScoreDuJoueur(joueur: Joueur, nombreDeDes: number): number {
    this._score = joueur.jouer(this.gobeletDuJoueur, nombreDeDes);

    console.log(`Le score de ${this._nom} est de : ${this._score}`);

    return this._score;
  }
}

export default Joueur;
