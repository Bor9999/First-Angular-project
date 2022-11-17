import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './content/blog/single-post/single-post.component';
import { ContactsComponent } from './content/contacts/contacts.component';

const routes: Routes = [{path : 'contacts' , component : ContactsComponent}, {path:'single-post',component: SinglePostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
