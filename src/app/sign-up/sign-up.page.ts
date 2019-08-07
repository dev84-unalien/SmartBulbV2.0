import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  showInput() {
    let value = $('#email').val();
    let password = $('#password').val();
    alert(value);
    alert(password);
  }
}