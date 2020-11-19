import { MatTableModule } from '@angular/material/table';
import { UserState } from './state/user.state';
import { NgxsModule } from '@ngxs/store';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { PrivateProductState } from './state/private-product.state';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addProduct',
    component: ProductAddComponent,
    canActivate: [AuthGuard]

  }
]

@NgModule({
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard



  ],
  declarations: [UsersComponent, ProductAddComponent],
  imports: [RouterModule.forRoot(routes), NgxsModule.forFeature([UserState, PrivateProductState]),
    CommonModule,
    ReactiveFormsModule,
  FormlyModule.forRoot(),
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,

  ]
})
export class PrivateModule { }
