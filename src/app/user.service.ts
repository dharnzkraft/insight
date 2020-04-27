import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class Item {
  body: string;
}
export class UserService {

  items: any;
  constructor(
    private afDatabase: AngularFireDatabase
  ) { }

  getItem() {
    this.items = this.afDatabase.list(`/comments`);
    return this.items;
  }
  createItem(item: Item) {
    this.items.push(item);
  }
}


// export interface Comment {
//   username: string;
//   comment: string;
// }
