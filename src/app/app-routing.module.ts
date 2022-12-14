import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogMainComponent } from './content/blog/blog-main/blog-main.component';
import { SinglePostComponent } from './content/blog/single-post/single-post.component';
import { ChartsContainerComponent } from './content/charts/charts-container/charts-container.component';
import { ContactsComponent } from './content/contacts/contacts.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'charts', component: ChartsContainerComponent },
  { path: 'blog', component: BlogMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
