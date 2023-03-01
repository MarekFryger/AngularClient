
import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from '../_services/shopping-lists.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-shopping-lists-table',
  templateUrl: './shopping-lists-table.component.html',
  styleUrls: ['./shopping-lists-table.component.css']
})
export class ShoppingListsTableComponent implements OnInit {

  currentUser: any;
  shoppingLists?: Array<any>;

  constructor(private token: TokenStorageService, private shoppingListsService: ShoppingListsService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.shoppingListsService.allForUser(this.currentUser.id).subscribe({
      next: (data: string) => {
        console.log(data);
        this.shoppingLists = JSON.parse(data);
      },
      error: (err: { error: string; })=> {
        this.shoppingLists = JSON.parse(err.error).message;
      }
    });
  }
}
