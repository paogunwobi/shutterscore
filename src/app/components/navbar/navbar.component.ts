import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  public buttonIconShowToggled = false;

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
  }

  // toggle sidebar in small devices
  toggleOffcanvas(): void {
    const sidebaOffCanvas: HTMLBodyElement | null = document.querySelector('.sidebar-offcanvas');
    if (sidebaOffCanvas) sidebaOffCanvas.classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar(): void {
    const body: HTMLBodyElement | null = document.querySelector('body');
    if (body) {
      if ((!body.classList.contains('sidebar-toggle-display')) && (!body?.classList.contains('sidebar-absolute'))) {
        this.iconOnlyToggled = !this.iconOnlyToggled;
        if (this.iconOnlyToggled) {
          body?.classList.add('sidebar-icon-only');
        } else {
          body?.classList.remove('sidebar-icon-only');
        }
      } else {
        this.sidebarToggled = !this.sidebarToggled;
        if (this.sidebarToggled) {
          body.classList.add('sidebar-hidden');
        } else {
          body.classList.remove('sidebar-hidden');
        }
      }
    }
  }

}
