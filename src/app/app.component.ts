import { Component, OnInit } from '@angular/core';
import { Tweet } from "./models/tweet";
import { TweetService } from "./services/tweet-service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedUser!: User;
  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.loggedUser = this.tweetService.getLoggedUser();
    this.tweets = this.tweetService.getTweets();
  }

  addNewTweet(tweet: Tweet) {
    this.tweetService.saveTweet(tweet);
  }

  removeTweet(tweetId: any) {
    this.tweetService.removeTweet(tweetId);
  }
}
