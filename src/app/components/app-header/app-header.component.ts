import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch, featherMessageSquare } from '@ng-icons/feather-icons';

@Component({
  selector: 'ngtw-app-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ featherSearch, featherMessageSquare })],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
})
export class AppHeaderComponent {}
