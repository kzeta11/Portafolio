import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsComponent } from "../forms/forms.component";

@Component({
  selector: 'app-about',
  imports: [HttpClientModule, FormsComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  isContactFormOpen = false;

  openContactForm() {
    this.isContactFormOpen = true;
  }

  onFormClosed() {
    this.isContactFormOpen = false;
  }

}
