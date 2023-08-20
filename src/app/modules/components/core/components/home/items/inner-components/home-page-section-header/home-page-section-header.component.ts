import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page-section-header',
  templateUrl: './home-page-section-header.component.html',
  styleUrls: ['./home-page-section-header.component.scss']
})
export class HomePageSectionHeaderComponent implements OnInit {

  @Input() title = "";
  @Input() description = "";

  ngOnInit(): void {
  }

}
