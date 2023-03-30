import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user";
import {Tweet} from "../../models/tweet";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() user!: User;
  @Input() tweets: Tweet[] = [];
  @Output() removeTweet = new EventEmitter<string>();

  deleteTweet(tweetId: string) {
    this.removeTweet.emit(tweetId);
  }
}
