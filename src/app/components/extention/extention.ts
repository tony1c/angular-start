import { Component, input } from '@angular/core';

import { ExtentionInterface } from '../../../models/extention';

@Component({
  selector: 'app-extention',
  imports: [],
  templateUrl: './extention.html',
  styles: ``,
})
export class Extention {
  extention = input.required<ExtentionInterface>();
}
