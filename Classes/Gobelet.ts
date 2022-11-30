import Des from "./Des";

class Gobelet {
  // Attributs
  private _valeur: number = 0;

  // Getter
  public get valeurDuGobelet() {
    return this._valeur;
  }

  // Setter
  public set valeur(nouvelleValeur: number) {
    this._valeur = nouvelleValeur;
  }

  // Méthodes
  /**
   * Génère une valeur aléatoire entre 1 et 6 pour chaque dés dans le gobelet.
   * @param nombreDeDes le nombre de dés dans le gobelet.
   * @return Le total du gobelet.
   */
  public lancer(nombreDeDes: number): number {
    const De: Des = new Des();
    let total: number = 0;

    for (let i = 1; i <= nombreDeDes; i++) {
      total += De.lancer();
    }
    return total;
  }

  /**
   * Affiche le total du gobelet sous forme de chaine de caractères.
   */
  public afficherScore(nombreDeLances: number): void {
    console.log(`Le total du gobelet est de : ${this.lancer(nombreDeLances)}.`);
  }
}

export default Gobelet;
