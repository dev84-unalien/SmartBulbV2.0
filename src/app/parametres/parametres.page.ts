import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import iro from '@jaames/iro';
@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {
  colorPicker: any;
  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.colorPicker = new iro.ColorPicker('#color-picker-container', {
      width: 320,
      color: '#f00'
    });
  }
  goToColor() {
    let hex = this.colorPicker.color.hexString;
    $('#color').css('background', hex);
  }
}
