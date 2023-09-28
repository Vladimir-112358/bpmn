import {Component} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent} from "./profile/profile.component";
import {RouterLink} from "@angular/router";


/**
 * @title Basic menu
 */

@Component({
  selector: 'menu-overview-example',
  templateUrl: './menu-overview-example.html',
  styleUrls: ['./menu-overview-example.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, ProfileComponent, RouterLink],

})

export class MenuOverviewExample {}
