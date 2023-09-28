import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./components/header/menu/profile/profile.component";
import {ProjectsComponent} from "./components/header/menu/projects/projects.component";
import {PublicationsComponent} from "./components/header/menu/publications/publications.component";
import {SettingsComponent} from "./components/header/menu/settings/settings.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "../not-found.component";
import {ContainerComponent} from "./components/container/container.component";

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
