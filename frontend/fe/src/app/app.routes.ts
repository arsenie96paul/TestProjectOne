import { Routes } from '@angular/router';
import { FirstPageComponent } from '../FirstPage/FirstPage.component'; // Update this path if necessary

export const routes: Routes = [
    { path: 'first', component: FirstPageComponent }, // Route for FirstPageComponent
    { path: '', redirectTo: '/first', pathMatch: 'full' }, // Redirect to FirstPageComponent by default
    // Add more routes here as needed
  ];
  