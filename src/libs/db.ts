// db.ts
import Dexie, { Table } from 'dexie';
import { Recipe } from './fetchRecipe';

export interface CustomRecipes {
  id?: number;
  name: string;
  recipes: Recipe[];
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  customRecipes!: Table<CustomRecipes>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      customRecipes: '++id, name' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();