import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BitcoinService } from './bitcoin/bitcoin.service';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github.service';

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'bitcoin', component: BitcoinComponent},
    {path: 'github', component: GithubComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BitcoinComponent, GithubComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, GithubService]
})
export class AppModule { }
