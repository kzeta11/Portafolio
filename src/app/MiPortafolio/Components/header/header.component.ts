import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsComponent } from "../forms/forms.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, FormsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() { }

  isContactFormOpen = false;

  openContactForm() {
    this.isContactFormOpen = true;
  }

  onFormClosed() {
    this.isContactFormOpen = false;
  }


}
