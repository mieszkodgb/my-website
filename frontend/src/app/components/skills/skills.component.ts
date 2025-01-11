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
      logo: 'logos/python.png',
      url: 'https://python.org'
    },
    {
      name: 'Rust',
      logo: 'logos/rust.png',
      url: 'https://rust-lang.org'
    },
    {
      name: 'Ansible',
      logo: 'logos/ansible.png',
      url: 'https://ansible.com'
    },
    {
      name: 'Docker',
      logo: 'logos/docker.png',
      url: 'https://docker.com'
    },
    {
      name: 'Angular',
      logo: 'logos/angular.png',
      url: 'https://angular.io'
    },
    {
      name: 'GitLab CI/CD',
      logo: 'logos/gitlab.png',
      url: 'https://gitlab.com'
    },
    {
      name: 'GitHub Actions',
      logo: 'logos/github.png',
      url: 'https://github.com/features/actions'
    },
    {
      name: 'PostgreSQL',
      logo: 'logos/postgresql.png',
      url: 'https://postgresql.org'
    },
    {
      name: 'SQLite',
      logo: 'logos/sqlite.png',
      url: 'https://sqlite.org'
    },
    {
      name: 'Raspberry Pi',
      logo: 'logos/raspberrypi.png',
      url: 'https://raspberrypi.org'
    },
    {
      name: 'Arduino',
      logo: 'logos/arduino.png',
      url: 'https://arduino.cc'
    },
    {
      name: 'Git',
      logo: 'logos/git.png',
      url: 'https://git-scm.com'
    }
  ];

  navigateToUrl(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}