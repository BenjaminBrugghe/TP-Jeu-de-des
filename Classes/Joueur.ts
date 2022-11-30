import Gobelet from "./Gobelet";

class Joueur {
  // Attributs
  private _nom: string;
  private _score: number;

  // Constructeur
  constructor(nom: string) {
    this._nom = nom;
  }

  // Méthodes
  public jouer(gobelet: Gobelet, nombreDeDes: number): void {
    gobelet.lancer(nombreDeDes);
  }

  public afficherScore(): void {
    let gobeletDuJoueur: Gobelet = new Gobelet();
    console.log(`Le score de ${this._nom} est de : ${gobeletDuJoueur.valeur}.`);
  }

  // Getter ?
}

export default Joueur;
