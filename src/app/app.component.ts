import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";
import { LocalStorageService } from "ngx-webstorage";
import {Tweet} from "./models/tweet";
import {LOCAL_STORAGE_TWEETS_KEY} from "./app.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tweets: Tweet[] = [];

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.tweets = this.localStorage.retrieve(LOCAL_STORAGE_TWEETS_KEY);
  }

  // Mocking the user that is creating the tweets.
  user: User = {
    id: '1',
    name: 'Pedro',
    username: 'pedroadmn',
    profileImage: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
  }

  getTweets() {

  }

  addNewTweet(event: any) {
    const tweets = this.localStorage.retrieve(LOCAL_STORAGE_TWEETS_KEY);
    if (tweets) {
      tweets.push(event);
      this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, tweets);
    } else {
      this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, [event]);
    }
  }

  removeTweet(tweetId: any) {
    this.tweets.forEach((tweet,index)=>{
      if(tweet.id === tweetId) {
        this.tweets.splice(index,1);
      }
    });

    this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, this.tweets);
  }
}
