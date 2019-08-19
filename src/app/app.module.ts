import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonModule} from "@angular/material";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { RandomComponent } from './random/random.component';
import { RoomComponent } from './room/room.component';
import { FirebaseService } from './firebase.service';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { ConvertPipe } from './room/convert.pipe';
import { FilterPipe } from './room/filter.pipe';





const appRoutes: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'rooms',component:RoomComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatepickerComponent,
    CarouselComponent,
    CardsliderComponent,
    RandomComponent,
    RoomComponent,
    ConvertPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
        MatNativeDateModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, SatDatepickerModule, SatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
