class Des {
  //Attributs
  private _valeur: number;

  // Méthodes
  /**
   * Génère un nombre aléatoire entre 1 et 6 (pour simuler un dé standard).
   * @returns un nombre entre 1 et 6.
   */
  private lancer(): number {
    return Math.floor(Math.random() * 6 + 1);
  }

  // Getter
  public get valeur() {
    return this.lancer();
  }
}

export default Des;
