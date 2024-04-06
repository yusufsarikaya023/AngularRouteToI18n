import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouteConsts } from './app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularRouteToI18n';
  routes = [
    { link: RouteConsts.Home, name: $localize`Home` },
    {
      link: RouteConsts.FrequentlyAskedQuestion,
      name: $localize`Frequently Asked Questions`,
    },
    { link: RouteConsts.Contact, name: $localize`Contact` },
  ];
}
