import { Component, OnInit } from '@angular/core';
import { snapshotToArray } from '../../firebase';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import firebaseConfig from '../../firebase';
// import { Comment } from '../../user.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})

export class CommentPage implements OnInit {

  comments: Observable<any[]>;
  username: '';
  comment: '';
  items;
  numberOfLikes = 0;
  dd: any;
  mm: any;
  today: any;
  date: any;
  constructor(
    private afDatabase: AngularFireDatabase) {

      this.getData();
    }

   // comment = {} as Comment;

  ngOnInit() {
  }

  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfLikes--;
  }
  createProfile() {
      this.afDatabase.list(`/comments`).push({name: this.username, comment: this.comment});
  }
  getData() {
    this.afDatabase.list(`/comments`).valueChanges().subscribe(
      data => {
        this.items = data;
      }
    );
  }


}
