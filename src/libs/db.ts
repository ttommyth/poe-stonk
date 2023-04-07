// db.ts
import Dexie, { Table } from 'dexie';
import { Recipe } from './fetchRecipe';

export type CustomRecipe = Partial<Recipe> & {
  id: string;
}
export interface CustomRecipeBook {
  id: string;
  name: string;
  recipes: CustomRecipe[];
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  customRecipeBooks!: Table<CustomRecipeBook>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      customRecipeBooks: '&id' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();