import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Ionic Developer',
      company: 'NetsTech Software Solutions (Pvt.) Ltd',
      companyUrl: 'https://netstech.net/',
      period: 'Oct 2025 - Present',
      description: 'Full Stack Developer (PHP & Ionic Angular)'
    },
    // {
    //   title: 'Flutter Developer (Intern)',
    //   company: 'Creative Web Studio',
    //   companyUrl: 'https://www.creativewebstudio.com',
    //   period: 'Jun 2023 - Dec 2023',
    //   description: 'Assisted in building client websites, optimized performance, and learned best practices in modern web development.'
    // }
  ];
}
