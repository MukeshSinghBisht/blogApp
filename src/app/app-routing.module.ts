import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { BlogsComponent } from "./blogs/blogs.component";
import { AddComponent } from "./add/add.component";
import { AuthGuard} from "./auth.guard";


const routes: Routes = [
 {
  path:'',
  component: LoginComponent
 },
 {
  path:'blogs',
  component: BlogsComponent,
  canActivate: [AuthGuard]
 },
 {
  path:'add',
  component: AddComponent,
  canActivate: [AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
