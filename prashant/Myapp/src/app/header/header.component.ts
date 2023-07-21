import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string;

  constructor(private userService: AuthService) {
    this.username = this.userService.getUsername();
  }

}
