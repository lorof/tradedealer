import {
  Component,
  ViewChildren,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @ViewChildren('div') public children!: HTMLDivElement;
}
