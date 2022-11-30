class Des {
  //Attributs
  private _valeur!: number;

  // Méthodes
  /**
   * Génère un nombre aléatoire entre 1 et 6 (dé standard).
   * @returns un nombre entre 1 et 6.
   */
  public lancer(): number {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

  // Getter
  public get valeurDuDe(): number {
    return this.lancer();
  }
}

export default Des;
