import { Component, OnInit } from '@angular/core';
import { WebService } from './../../services/web/web.service';
import { Format } from './../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  formats: Format[];

  constructor(private webService: WebService) {}

  getFormats(): void {
    this.webService.getFormats().then(formats => this.formats = formats);
  }

  ngOnInit(): void {
    this.getFormats();
  }
}
