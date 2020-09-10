import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {

  @Input() buttonLabel: string;
  @Input() buttonName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
