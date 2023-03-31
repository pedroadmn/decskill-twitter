import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from "../../models/user";
import { Tweet } from "../../models/tweet";
import { DatePipe } from "@angular/common";
import { LocalStorageService } from "ngx-webstorage";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";
import { CONFIRM_DELETE_DESCRIPTION, CONFIRM_DELETE_TITLE, LOCAL_STORAGE_TWEETS_KEY } from "../../app.constants";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit{
  @Input() user!: User;
  @Input() tweets: Tweet[] = [];
  @Output() removeTweet = new EventEmitter<string>();


  private intervalSubscription!: Subscription;

  constructor(private datePipe: DatePipe,
              private localStorage: LocalStorageService,
              private modalService: NgbModal) {
  }

  deleteTweet(tweetId: string) {
    this.removeTweet.emit(tweetId);
  }

  ngOnInit() {
    this.startInterval();
  }

  private startInterval() {
    this.intervalSubscription = interval(1000).subscribe(() => {
      for (const tweet of this.tweets) {
        tweet.elapsedTime = this.getElapsedTime(tweet.createAt);
      }
      this.localStorage.store(LOCAL_STORAGE_TWEETS_KEY, this.tweets);
    });
  }

  getElapsedTime(date: Date): string {
    const now = new Date();
    const elapsed = now.getTime() - date.getTime();
    const seconds = Math.floor(elapsed / 1000);
    if (seconds < 60) {
      return `${seconds} s`;
    } else {
      return this.getDateHour(date);
    }
  }

  getDateHour(date: Date): any {
    return this.datePipe.transform(date, 'MM/dd/yyyy HH:mm:ss');
  }

  openConfirmDeleteModal(tweetId: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = CONFIRM_DELETE_TITLE;
    modalRef.componentInstance.message = CONFIRM_DELETE_DESCRIPTION;
    modalRef.componentInstance.confirmed.subscribe(() => {
        this.deleteTweet(tweetId);
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
