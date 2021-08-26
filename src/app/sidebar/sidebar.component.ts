import { Component, OnInit } from '@angular/core';

import { ImgsService } from '../imgs.service'
import { ActionlogService } from '../actionlog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  show_img: string = "";
  temp: string = ""

  constructor(private imageService: ImgsService, public actionlog: ActionlogService) { }

  ngOnInit(): void {
  }

  add(id: string): void {
    this.imageService.getImage(id)
      .subscribe(imgstr =>
          this.temp = JSON.stringify(imgstr)
       );
    if(this.temp === ''){
      this.actionlog.add('i don\'t know')
    }
    this.actionlog.add(`Sidebar: RCV'd source ${this.temp}`)
    this.actionlog.add(this.temp)
  }
}
