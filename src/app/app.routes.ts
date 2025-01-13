import { Routes } from '@angular/router';
import { HomepageComponent } from './my/components/homepage/homepage.component';
import { PayoutComponent } from './my/components/payout/payout.component';
import { AepsComponent } from './my/components/aeps/aeps.component';
import { RechargeComponent } from './my/components/recharge/recharge.component';

import { LoginComponent } from './my/components/login/login.component';
import { SidebarComponent } from './my/components/sidebar/sidebar.component';
import { ButtonsComponent } from './my/components/buttons/buttons.component';
import { TemplateformComponent } from './my/components/templateform/templateform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './my/components/reactiveform/reactiveform.component';
import { NewloginComponent } from './my/components/newlogin/newlogin.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:'home', component: HomepageComponent},
    {path: 'payout', component: PayoutComponent},
    {path: 'aeps', component : AepsComponent},
    {path: 'home/recharge' , component:RechargeComponent},
    {path:'buttons', component:ButtonsComponent},
    {path: 'template',component:TemplateformComponent},
    {path : 'reactive', component : ReactiveformComponent},
    {path : 'newlogin' , component: NewloginComponent}
    
            
];          
