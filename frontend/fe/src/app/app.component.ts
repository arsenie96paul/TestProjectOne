import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, // This indicates that this is a standalone component
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], // Add necessary modules here
  templateUrl: './app.component.html', // Template file for the component
  styleUrls: ['./app.component.css'], // CSS file for the component
})

export class AppComponent {
  title = 'test';
 
  
}
