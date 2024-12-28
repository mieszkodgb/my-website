import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  url?: string;  // Optional URL for skills that have websites
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Python',
      logo: 'assets/logos/python.png',
      url: 'https://python.org'
    },
    {
      name: 'Rust',
      logo: 'assets/logos/rust.png',
      url: 'https://rust-lang.org'
    },
    {
      name: 'Ansible',
      logo: 'assets/logos/ansible.png',
      url: 'https://ansible.com'
    },
    {
      name: 'Docker',
      logo: 'assets/logos/docker.png',
      url: 'https://docker.com'
    },
    {
      name: 'Angular',
      logo: 'assets/logos/angular.png',
      url: 'https://angular.io'
    },
    {
      name: 'GitLab CI/CD',
      logo: 'assets/logos/gitlab.png',
      url: 'https://gitlab.com'
    },
    {
      name: 'GitHub Actions',
      logo: 'assets/logos/github-actions.png',
      url: 'https://github.com/features/actions'
    },
    {
      name: 'PostgreSQL',
      logo: 'assets/logos/postgresql.png',
      url: 'https://postgresql.org'
    },
    {
      name: 'SQLite',
      logo: 'assets/logos/sqlite.png',
      url: 'https://sqlite.org'
    },
    {
      name: 'Raspberry Pi',
      logo: 'assets/logos/raspberry-pi.png',
      url: 'https://raspberrypi.org'
    },
    {
      name: 'Arduino',
      logo: 'assets/logos/arduino.png',
      url: 'https://arduino.cc'
    },
    {
      name: 'Git',
      logo: 'assets/logos/git.png',
      url: 'https://git-scm.com'
    }
  ];

  navigateToUrl(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}