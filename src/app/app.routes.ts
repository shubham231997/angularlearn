import { Routes } from '@angular/router';
import { HomepageComponent } from './my/components/homepage/homepage.component';
import { PayoutComponent } from './my/components/payout/payout.component';
import { AepsComponent } from './my/components/aeps/aeps.component';
import { RechargeComponent } from './my/components/recharge/recharge.component';
import { BannerenquiryComponent } from './my/components/bannerenquiry/bannerenquiry.component';
import { LoginComponent } from './my/components/login/login.component';
import { SidebarComponent } from './my/components/sidebar/sidebar.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:'home', component: HomepageComponent},
    {path: 'payout', component: PayoutComponent},
    {path: 'aeps', component : AepsComponent},
    {path: 'home/recharge' , component:RechargeComponent},
    {path:'bannerenquiry', component:BannerenquiryComponent}
            
];
