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

  constructor(
    private authService: AuthService,
    private translate: TranslateService) { }

  @HostListener('window:scroll', ['$event'])
    onScroll($event) {
      if (pageYOffset > 60) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }

  ngOnInit() {
  }

}
