import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically handle the form submission
    // For example, sending an email or making an API call
    console.log('Form submitted:', this.contactForm);
  }
}
