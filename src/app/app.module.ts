import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { AppComponent } from './app.component';
import { MainComponentsModule } from './modules/main-components.module';
import { AddComponentsModule } from './modules/add-components.module';
import { EditComponentsModule } from './modules/edit-components.module';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainComponentsModule,
    AddComponentsModule,
    EditComponentsModule,
    MaterialModule
  ], 
  providers: [ {  
    provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true 
  }
 ],
})
export class AppModule { }
