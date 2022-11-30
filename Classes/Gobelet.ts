import Des from "./Des";

class Gobelet {
  // Attributs
  private _valeur: number = 0;

  // Méthodes
  /**
   * Génère une valeur aléatoire entre 1 et 6 pour chaque dés dans le gobelet.
   * @param nombreDeDes le nombre de dés dans le gobelet.
   */
  public lancer(nombreDeDes: number): void {
    let De: Des = new Des();

    for (let i = 1; i <= nombreDeDes; i++) {
      this._valeur += De.valeur;
    }
  }

  /**
   * Affiche le total du gobelet sous forme de chaine de caractères.
   */
  public afficherScore(): void {
    console.log(`Le total du gobelet est de : ${this._valeur}.`);
  }

  // Getter
  public get valeur() {
    return this._valeur;
  }
}

export default Gobelet;
