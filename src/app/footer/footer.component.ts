import { Component, OnInit, ViewChildren, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  @ViewChildren('div') public children!: HTMLDivElement;

  constructor() { }

  public ngOnInit(): void {
  }

}
