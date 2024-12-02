import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './MiPortafolio/Components/header/header.component';
import { AboutComponent } from './MiPortafolio/Components/about/about.component';
import { SkillsComponent } from "./MiPortafolio/Components/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portafolio';


  ngOnInit() : void {
    initFlowbite();
  }
}
