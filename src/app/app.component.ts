import { Component } from '@angular/core';
import {User} from "./models/user";
import { LocalStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private localStorage: LocalStorageService,
  ) {
  }

  // Mocking the user that is creating the tweets.
  user: User = {
    id: '1',
    name: 'Pedro',
    username: 'pedroadmn',
    profileImage: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
  }

  addNewTweet(event: any) {
    const tweets = this.localStorage.retrieve('tweets');
    if (tweets) {
      tweets.push(event);
      this.localStorage.store('tweets', tweets);
    } else {
      this.localStorage.store('tweets', [event]);
    }
  }
}
