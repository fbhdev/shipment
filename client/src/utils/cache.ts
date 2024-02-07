
export class Cache {

  private static readonly loot = {};

  static get keys() {
    return this.loot;
  }

  static getItem(key: string): any {
    if (!key) {
      return null;
    }
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem(key: string, value: unknown): void {
    if (!key && !value) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    if (!key) {
      return;
    }
    localStorage.removeItem(key)
  }

  static clearCache(): void {
    localStorage.clear();
  }
}
