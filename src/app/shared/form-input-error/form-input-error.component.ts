import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input-error',
  templateUrl: './form-input-error.component.html',
  styleUrls: ['./form-input-error.component.css']
})
export class FormInputErrorComponent implements OnInit {

  @Input() error: string;

  constructor() { }

  ngOnInit(): void {
  }

}
