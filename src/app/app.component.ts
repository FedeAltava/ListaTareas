import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FedeComponenteComponent } from './fede-componente/fede-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FedeComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fede_proyecto';
}
