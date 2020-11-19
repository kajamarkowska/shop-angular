import { Observable } from 'rxjs';
import { PageUserDto } from '../../../api/models/page-user-dto';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PageUserAction } from '../state/user.actions';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

// czego brakuje do wyswietlenia html jest, component jest, w private module jest?


  displayedColumns = ['id', 'email']
  @Select(state => state.user.pageUser)
  pageUser$: Observable<PageUserDto>
  constructor(public store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(new PageUserAction(0, 10))

  }

  changePage(event : PageEvent){
  this.store.dispatch(new PageUserAction (event.pageIndex, event.pageSize))
 }

}
