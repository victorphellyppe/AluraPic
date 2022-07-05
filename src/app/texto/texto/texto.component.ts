import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
  @Input()txt = "";
  constructor() { }

  ngOnInit(): void {
  }

}
