import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputText: string;
  @Input() model: any;
  @Input() placeholderField: string;

  constructor() { }

  ngOnInit(): void {
  }

}
