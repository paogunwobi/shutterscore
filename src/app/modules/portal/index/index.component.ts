import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  showNavbar = true;
  isLoading: boolean | undefined;


  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
      }
    });

    const sidebaOffCanvas: HTMLBodyElement | null = document.querySelector('.sidebar-offcanvas');
    if (sidebaOffCanvas && sidebaOffCanvas === null) {
      this.showNavbar = true;
    }
   }

  ngOnInit(): void {

    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });

    const body: HTMLBodyElement | null = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', () => {
        if (body?.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', () =>  {
        if (body?.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

  logout(): void {
    // logout logic
    console.log('logging out');
  }
}
