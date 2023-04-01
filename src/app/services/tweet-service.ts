import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { Tweet} from "../models/tweet";
import { LOCAL_STORAGE_TWEETS_KEY } from "../app.constants";
import { LocalStorageService } from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private localStorage: LocalStorageService) { }

  // Mocking the user that is creating the tweets.
  getLoggedUser(): User {
    return {
      id: '1',
      name: 'Pedro',
      username: 'pedroadmn',
      profileImage: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
    }
  }

  getTweets(): Tweet[] {
    return this.localStorage.retrieve(LOCAL_STORAGE_TWEETS_KEY);
  }

  saveTweet(tweet: Tweet): any {
    const tweets = this.localStorage.retrieve(LOCAL_STORAGE_TWEETS_KEY);
    if (tweets) {
      tweets.push(tweet);
      this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, tweets);
    } else {
      this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, [tweet]);
    }
  }

  removeTweet(tweetId: string) {
    const tweets = this.getTweets();
    tweets.forEach((tweet,index)=>{
      if(tweet.id === tweetId) {
        tweets.splice(index,1);
      }
    });

    this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, tweets);
  }
}
