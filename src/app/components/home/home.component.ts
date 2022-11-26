import { Component, OnInit } from '@angular/core';

import * as Aos from 'aos';

import { HackersService } from 'src/app/services/hackers.service';
import { Hacker } from 'src/app/models/hacker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hackers!: Array<Hacker>;
  constructor(private _service: HackersService) { }

  loadHackers():void{
    this._service.getHackers().subscribe(res=>{
      this.hackers = res;
    });
  }

  ngOnInit(): void {
    Aos.init();
    this.loadHackers();
  }

}
