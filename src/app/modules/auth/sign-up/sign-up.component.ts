import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SignUpComponent implements OnInit {

  slides: {title: string, subtitle: string, imgUrl: string}[] = []
  showNavigationArrows = false;
  showNavigationIndicators = true;

  constructor(
    public router: Router,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    const status = window.sessionStorage.getItem('loggedIn');
    if (status) {
      this.router.navigate(['portal/dashboard']);
    }
    this.slides = [
      {
        title: 'Pay with card',
        subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo',
        imgUrl: 'assets/surface1.svg'
      },
      {
        title: 'Grow your funds',
        subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo',
        imgUrl: 'assets/bank.svg'
      },
      {
        title: 'Pay anywhere, anytime',
        subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo',
        imgUrl: 'assets/atm-machine.svg'
      },
    ]
  }

  onSubmit() {
    // this.router.navigateByUrl('portal/dashboard');
    this.router.navigate(['portal/dashboard']);
  }
}
