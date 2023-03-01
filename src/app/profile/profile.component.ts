
import { Component, OnInit } from '@angular/core';
import { User } from '../_interfaces/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user?: User;

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getUserInfo(this.currentUser.id).subscribe({
      next: (data: string) => {
        console.log(data)
        this.user = JSON.parse(data);
      },
      error: (err: { error: string; }) => {
        this.user = JSON.parse(err.error).message;
      }
    });
  }
}
