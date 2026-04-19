import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedTab: 'mobile' | 'web' = 'mobile';

  mobileProjects = [
    {
      name: 'SalePro CRM',
      screenshot: 'assets/crm.webp',
      appStoreUrl: 'https://play.google.com/store/apps/details?id=app.saleprocrm.com',
      description: 'CRM helps you organize work efficiently by managing teams, projects, tasks, and customer callbacks — all in one place. Stay updated with smart notifications, calendar scheduling, and clear task status so you always know what’s done and what’s pending.'
    },
    {
      name: 'WhatsPush',
      screenshot: 'assets/whatspush.webp',
      appStoreUrl: 'https://play.google.com/store/apps/details?id=app.whatspush.com',
      description: 'WhatsPush is a powerful WhatsApp Business API platform designed for businesses that need automated, secure, and real-time communication with customers. With this app, you can manage chats, send notifications, create templates, run campaigns, and monitor message delivery — all from one simple mobile dashboard.'
    },
    {
      name: 'FingerMed',
      screenshot: 'assets/FingerMed.png',
      appStoreUrl: 'https://github.com/NasiraBatool1/FingerMed',
      description: 'An android app built using Flutter, Dart ,Firebase and Deep Learning. Helps to connect Donors and check bloodgroup using fingerprints.'
    },

  ];

  webProjects = [
    {
      name: 'Portfolio Website',
      screenshot: 'assets/portfolio.png',
      liveUrl: 'https://nasiraportfolio.netlify.app/',
      description: 'Portfolio website showcasing various projects and skills.'
    },
    {
      name: 'Delicious.',
      screenshot: 'assets/delicious..png',
      liveUrl: 'https://github.com/NasiraBatool1/Angular-Project',
      description: 'Basic food website landing page built using HTML, CSS, SASS, Bootstrap and jQuery.'
    }
  ];

  selectTab(tab: 'mobile' | 'web') {
    this.selectedTab = tab;
  }
}
