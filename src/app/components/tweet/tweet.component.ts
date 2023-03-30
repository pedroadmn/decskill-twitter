import {Component, Input} from '@angular/core';
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
}
