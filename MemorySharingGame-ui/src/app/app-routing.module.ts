import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShareMemoryComponent} from './components/share-memory/share-memory.component';
import {HomeComponent} from './components/home/home.component';
import {GetmemoryandguesspersonComponent} from './components/getmemoryandguessperson/getmemoryandguessperson.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
    },
  {
    path : 'postMemory',
    component : ShareMemoryComponent
    },
    {
      path:'getmemory/:id',
      component:GetmemoryandguesspersonComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
