import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Output() confirmed = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete() {
    this.confirmed.emit();
    this.activeModal.close();
  }
}
