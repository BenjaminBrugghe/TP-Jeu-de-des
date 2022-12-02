class Des {
  //Attributs
  private _valeur!: number;

  // Getter
  public get valeur(): number {
    return this._valeur;
  }

  // Setter
  public set valeur(nouvelleValeur: number) {
    this._valeur = nouvelleValeur;
  }

  // Méthodes
  /**
   * Génère un nombre aléatoire entre 1 et 6 (dé standard).
   * @returns un nombre entre 1 et 6.
   */
  public lancer(): number {
    this._valeur = Math.floor(Math.random() * 6 + 1);
    return this._valeur;
  }
}

export default Des;
