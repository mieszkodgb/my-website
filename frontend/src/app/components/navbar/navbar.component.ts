import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeLink: string = 'Home';
  navbarOpen: boolean = false;

  setActive(link: string) {
    this.activeLink = link;
    this.navbarOpen = false; // Close the navbar on link click
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}