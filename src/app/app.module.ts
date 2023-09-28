import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NotFoundComponent } from 'src/not-found.component';
import { ExitComponent } from './components/header/menu/exit/exit.component';
import { ProfileComponent } from './components/header/menu/profile/profile.component';
import { ProjectsComponent } from './components/header/menu/projects/projects.component';
import { PublicationsComponent } from './components/header/menu/publications/publications.component';
import { SettingsComponent } from './components/header/menu/settings/settings.component';
import {MenuOverviewExample} from "./components/header/menu/menu-overview-example";
import { ContainerComponent } from './components/container/container.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        LogoComponent,
        ExitComponent,
        ProjectsComponent,
        PublicationsComponent,
        SettingsComponent,
        NotFoundComponent,
        ContainerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuOverviewExample,
    BrowserAnimationsModule,
  ]
})
export class AppModule { }
