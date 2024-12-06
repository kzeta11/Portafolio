import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @Input() isOpen: boolean = false;
  @Output() formClosed: EventEmitter<void> = new EventEmitter<void>();

  formData = {email: '', message: ''};
  isSending: boolean = false;
  isPopupVisible: boolean = false;
  validationErrors = { email: false, message: false };



  closeForm() {
    this.isOpen = false;
    this.formClosed.emit();
  }

  showPopup() {
    this.isPopupVisible = true;
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 5000);
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  validateForm() {
    this.validationErrors.email = !this.formData.email;
    this.validationErrors.message = !this.formData.message;
    return !this.validationErrors.email && !this.validationErrors.message;
  }

  onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSending = true;
    setTimeout(() => {
      this.isSending = false;
      this.showPopup();
      this.closeForm();
      this.formData = { email: '', message: '' };
    }, 2000);
  }

}
