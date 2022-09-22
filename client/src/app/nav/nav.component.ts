import { Component, createNgModule, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
 loggedIn: boolean | undefined;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => { 
        console.log(response);
        this.loggedIn = true; 
      },
      error: (e) => console.error(e)
    });
  }

  logout() {
    this.loggedIn = false;
  }

}
