import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private titles = ['DevOps', 'Backend', 'Software'];
  private currentTitleIndex = 0;
  displayedText = '';
  private isDeleting = false;
  private typingSpeed = 150; // Speed for typing
  private deletingSpeed = 75; // Speed for deleting
  private delayAfterWord = 2000; // Pause when word is complete
  private typingInterval: any;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingAnimation() {
    const currentWord = this.titles[this.currentTitleIndex];
    
    if (this.isDeleting) {
      // Deleting animation
      this.displayedText = currentWord.substring(0, this.displayedText.length - 1);
    } else {
      // Typing animation
      this.displayedText = currentWord.substring(0, this.displayedText.length + 1);
    }

    let timeoutSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    // Handle transition to next word
    if (!this.isDeleting && this.displayedText === currentWord) {
      // Word is complete, wait before starting to delete
      timeoutSpeed = this.delayAfterWord;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedText === '') {
      // Word is fully deleted, move to next word
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      timeoutSpeed = 500; // Pause before starting next word
    }

    this.typingInterval = setTimeout(() => {
      this.startTypingAnimation();
    }, timeoutSpeed);
  }
}
