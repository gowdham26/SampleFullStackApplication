import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MemorySharingGameService} from './services/memory-sharing-game.service';
import { ShareMemoryComponent } from './components/share-memory/share-memory.component';
import { HomeComponent } from './components/home/home.component';
import { GetmemoryandguesspersonComponent } from './components/getmemoryandguessperson/getmemoryandguessperson.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareMemoryComponent,
    HomeComponent,
    GetmemoryandguesspersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MemorySharingGameService,ShareMemoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
