import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  name = '';
  email = '';
  username = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    const payload = {
      email: localStorage.getItem('email')
    };

    this.api.getUserDetails('user/getuserDetails', payload)
    .subscribe( resp => {

      resp = JSON.parse(resp);
      this.name = resp[0].firstName + ' ' + resp[0].lastName;
      this.email = resp[0].email;
      this.username = resp[0].username;
    });
  }

}
