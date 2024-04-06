import { Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export class RouteConsts {
  public static readonly Home = $localize`:@@home:home`;
  public static readonly FrequentlyAskedQuestion = $localize`:@@frequently-asked-questions:frequently-asked-questions`;
  public static readonly Contact = $localize`:@@contact:contact`;
}

export const routes: Routes = [
  { path: '', redirectTo: RouteConsts.Home, pathMatch: 'full' },
  { path: RouteConsts.Home, component: HomeComponent },
  { path: RouteConsts.FrequentlyAskedQuestion, component: QuestionsComponent },
  { path: RouteConsts.Contact, component: ContactComponent },
];
