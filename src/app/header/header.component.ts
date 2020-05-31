import { Component, OnInit, ChangeDetectionStrategy, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChildren('span') public children!: HTMLDivElement;

  constructor() { }

  public ngOnInit(): void {
  }

}
