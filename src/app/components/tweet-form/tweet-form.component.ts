import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tweet} from "../../models/tweet";
import {User} from "../../models/user";

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.scss']
})
export class TweetFormComponent {
  @Input() user!: User;
  @Output() newTweet = new EventEmitter<Tweet>();

  tweetContent = '';

  constructor() {}

  get isTweetContentEmpty() {
    return this.tweetContent.trim().length === 0;
  }

  ngOnInit(): void {}

  onSubmit($event: Event) {
    console.log($event);
    $event.preventDefault();
    if(this.isTweetContentEmpty) {
      return;
    }

    this.newTweet.emit({
      id: Date.now().toString(),
      content: this.tweetContent,
      user: this.user,
    });

    this.tweetContent = '';
  }
}
