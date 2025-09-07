import { Component, OnInit, signal } from '@angular/core';

import extentionList from '../../../../public/assets/data.json';
import { ExtentionInterface } from '../../../models/extention';
import { Extention } from '../extention/extention';

@Component({
  selector: 'app-extention-list',
  imports: [Extention],
  templateUrl: './extention-list.html',
  styles: ``,
})
export class ExtentionList implements OnInit {
  extentions = signal<ExtentionInterface[]>(extentionList);

  ngOnInit(): void {
    console.log(this.extentions());
  }
}
