import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../_interfaces/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  currentUser: any;
  displayedColumns: string[] = ['pos', 'username', 'email', 'activeButton'];
  dataSource: MatTableDataSource<User>;
  dataArray: Array<User>;
  error: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private token: TokenStorageService, private userService: UserService, private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getListAll().subscribe({
      next: (data: string) => {
        this.dataArray = JSON.parse(data);
        this.dataSource = new MatTableDataSource<User>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error: (err: { error: string; }) => {
        this.error = JSON.parse(err.error).message;
        this._snackBar.open(this.error,'Close',{
          duration: 5000,
          panelClass:['red-snackbar']
        })
      }
    });
  }

  changeUserActivity(id: string): void {
    this.userService.changeUserActivity(id).subscribe({
      next: (data: string) => {
        let user = JSON.parse(data);
        let index = this.dataArray.findIndex(item => item.id === user.id);
        if(index >= 0){
            this.dataArray[index]= user;
            this.dataSource.data = this.dataArray;
            this.dataSource._updateChangeSubscription();
        }
      },
      error: (err: { error: string; }) => {
        this.error = JSON.parse(err.error).message;
        this._snackBar.open(this.error,'Close',{
          duration: 5000,
          panelClass:['red-snackbar']
        })
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
