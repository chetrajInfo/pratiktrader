import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'contact-me', component:ContactComponent},
  {path:'email',component:EmailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
