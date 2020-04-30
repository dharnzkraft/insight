import { Component, OnInit } from '@angular/core';
import { snapshotToArray } from '../../firebase';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { NavController, Platform } from '@ionic/angular';
import firebaseConfig from '../../firebase';
// import { Comment } from '../../user.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

declare var $;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})

export class CommentPage implements OnInit {

  sec3comments: Observable<any[]>;
  sec2comments: Observable<any[]>;
  comments: Observable<any[]>;
  username1: '';
  comment1: '';
  username2: '';
  comment2: '';
  username3: '';
  comment3: '';
  toils;  // third page data
  users; // second page data
  items; // first page data
  loads; // like button
  numberOfLikes = 0;
  numberOfDislikes = 0;
  dd: any;
  mm: any;
  today: any;
  date: any;

  constructor(
    private afDatabase: AngularFireDatabase,
    public platform: Platform
  ) {

      this.getData();
      this.getData2();
      this.getData3();
      this.getLikes();

      this.platform.ready().then(() => {

        $('.tab1').click(() => {
          $('.section1').show();
          $('.section2').hide();
          $('.section3').hide();
          $('.default').hide();
        });

        $('.tab2').click(() => {
          $('.section2').show();
          $('.section1').hide();
          $('.section3').hide();
          $('.default').hide();
        });

        $('.tab3').click(() => {
          $('.section3').show();
          $('.section1').hide();
          $('.section2').hide();
          $('.default').hide();
        });
      });
    }

   // comment = {} as Comment;

  ngOnInit() {
  }

  likeButtonClick() {
    this.afDatabase.list(`/likes`).push({like: this.numberOfLikes});
    // this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfDislikes--;
  }
  createProfile1() {
      this.afDatabase.list(`/comments`).push({name: this.username1, comment: this.comment1});
  }

  createProfile2() {
    this.afDatabase.list(`/sec2comments`).push({ name: this.username2, comment: this.comment2 });
  }

  createProfile3() {
    this.afDatabase.list(`/sec3comments`).push({ name: this.username3, comment: this.comment3 });
  }


  getData() {
    this.afDatabase.list(`/comments`).valueChanges().subscribe(
      data => {
        this.items = data;
      }
    );
  }

  getData2() {
    this.afDatabase.list(`/sec2comments`).valueChanges().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  getData3() {
    this.afDatabase.list(`/sec3comments`).valueChanges().subscribe(
      data => {
        this.toils = data;
      }
    );
  }

  getLikes() {
    this.afDatabase.list(`/likes`).valueChanges().subscribe(
      data => {
        this.loads = data.lenght;
        console.log(Object.keys(data).length);
      }
    );
  }

}
