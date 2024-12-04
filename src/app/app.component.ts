import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './MiPortafolio/Components/header/header.component';
import { AboutComponent } from './MiPortafolio/Components/about/about.component';
import { SkillsComponent } from "./MiPortafolio/Components/skills/skills.component";
import { ProjectsComponent } from "./MiPortafolio/Components/projects/projects.component";
import { MeComponent } from "./MiPortafolio/Components/me/me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, MeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portafolio';


  ngOnInit() : void {
    initFlowbite();
  }
}
