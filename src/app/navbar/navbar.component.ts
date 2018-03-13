import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isCollapsed = true;
  private isScrolled: boolean;
  private isFixed = true;
  private innerWidth: any;

  constructor(
    private authService: AuthService,
    private translate: TranslateService) {}

  @HostListener('window:scroll', ['$event'])
    onScroll($event) {
      if (pageYOffset > 60 && innerWidth >= 768) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = event.target.innerWidth;
      if (innerWidth < 768) {
        this.isFixed = false;
      } else {
        this.isFixed = true;
      }
    }

  ngOnInit() {
    this.innerWidth = window.screen.width;
    if (innerWidth < 768) {
      this.isFixed = false;
    } else {
      this.isFixed = true;
    }
  }

}
