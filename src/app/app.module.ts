import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CuttingCalcComponent } from './cutting-calc/cutting-calc.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { PlannerComponent } from './planner/planner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { KhpiComponent } from './khpi/khpi.component';
import { ChairComponent } from './chair/chair.component';
import { ClusterComponent } from './cluster/cluster.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { OrderService } from './services/order.service';

import { NewsService } from './services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CuttingCalcComponent,
    WarehouseComponent,
    PlannerComponent,
    NotFoundComponent,
    ContactsComponent,
    NewsComponent,
    KhpiComponent,
    ChairComponent,
    ClusterComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cluster',
        component: ClusterComponent
      },
      {
        path: 'chair',
        component: ChairComponent
      },
      {
        path: 'khpi',
        component: KhpiComponent
      },
      {
        path: 'cutting-calculation',
        component: CuttingCalcComponent
      },
      {
        path: 'virtual-warehouse',
        component: WarehouseComponent
      },
      {
        path: 'planner',
        component: PlannerComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ]),
  ],
  providers: [
    NewsService,
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
