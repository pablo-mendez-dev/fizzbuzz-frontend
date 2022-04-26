import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetFizzbuzzComponent } from './components/get-fizzbuzz/get-fizzbuzz.component';
import { GetAllOkFizzbuzzComponent } from './components/get-all-ok-fizzbuzz/get-all-ok-fizzbuzz.component';
import { GetAllErrorFizzbuzzComponent } from './components/get-all-error-fizzbuzz/get-all-error-fizzbuzz.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-fizzbuzz', component: GetFizzbuzzComponent },
  { path: 'get-all-ok', component: GetAllOkFizzbuzzComponent },
  { path: 'get-all-error', component: GetAllErrorFizzbuzzComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
