import { Component, OnInit } from '@angular/core';
import { IonMarqueeModule } from 'ionic-marquee';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // horizontalText = `*If you're having any of the above symptoms,
  //         <b>SELF ISOLATE</b> as soon as possible for the safety of your loved ones`;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.horizontalText =  `* If you're having any of the above symptoms,
    //     < b > SELF ISOLATE </b> as soon as possible for the safety of your loved ones`;
    // }, 5000);
  }
}
