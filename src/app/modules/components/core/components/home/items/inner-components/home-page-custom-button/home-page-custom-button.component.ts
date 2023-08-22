import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-page-custom-button',
  templateUrl: './home-page-custom-button.component.html',
  styleUrls: ['./home-page-custom-button.component.scss']
})
export class HomePageCustomButtonComponent {
  @Input() buttonText: string = 'SUBSCRIBE';
  @Input() textColor: string = '';
  @Input() backgroundColor: string = '';
}
