import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbButtonModule, NbCardModule, NbInputModule, NbToastrModule, NbDialogModule, NbListModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmBoxComponent } from './tools/confirm-box/confirm-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewComponent,
    UpdateComponent,
    DetailComponent,
    HomeComponent,
    ConfirmBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbListModule,
    NbDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
