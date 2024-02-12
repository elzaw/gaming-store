import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = true;
  constructor(private loginService: AuthService) {
    console.log(this.isLoggedIn);
  }
  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.loginService.logout();
    this.loginService.isLoggedIn().subscribe({
      next: (value) => {
        this.isLoggedIn = value;
      },
    });
  }
}
