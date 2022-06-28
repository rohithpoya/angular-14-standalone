import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardOneComponent } from './cards/card-one/card-one.component';
import { CardThreeComponent } from './cards/card-three/card-three.component';
import { CardTwoComponent } from './cards/card-two/card-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardOneComponent, CardTwoComponent, CardThreeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-14-standalone';
}
