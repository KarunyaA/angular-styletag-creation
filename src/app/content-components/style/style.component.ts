import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  public text: string;
  public type: string;
  
  constructor() { }

  ngOnInit() {
  }

  contentOnCreate(values): void {
    this.text = values.text;
    this.type = values.type;
  }

}