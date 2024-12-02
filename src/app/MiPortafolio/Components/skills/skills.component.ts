import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-skills',
  imports: [HttpClientModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initFlowbite();
  }



}
