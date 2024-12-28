import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

interface LanguageSkill {
  language: string;
  level: string;
  percentage: number;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit {
  languageSkills: LanguageSkill[] = [
    {
      language: 'English',
      level: 'C2',
      percentage: 95,
      description: 'Native-like proficiency'
    },
    {
      language: 'French',
      level: 'B2',
      percentage: 75,
      description: 'Professional working proficiency'
    },
    {
      language: 'Spanish',
      level: 'B1',
      percentage: 60,
      description: 'Intermediate level'
    },
    {
      language: 'Dutch',
      level: 'A2',
      percentage: 40,
      description: 'Elementary proficiency'
    }
  ];

  ngOnInit() {
    this.createPersonalityChart();
  }

  private createPersonalityChart() {
    const ctx = document.getElementById('personalityChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Analytical Thinking',
          'Creativity',
          'Team Leadership',
          'Communication',
          'Problem Solving',
          'Adaptability'
        ],
        datasets: [{
          label: 'Personal Traits',
          data: [90, 75, 85, 80, 95, 85],
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(59, 130, 246)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
