import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
  {path:'contact',component:ContactComponent,title:'component'},
  {path:'**',component:NotfoundComponent}
];
//,{scrollPositionRestoration:'top'}
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
