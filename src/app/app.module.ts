import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './components/success/success.component';
import { LanguageServiceService, URLLanguage } from './services/language-service.service';


let languageURL: URLLanguage[] = [];
let languageService: LanguageServiceService = new LanguageServiceService;

languageService.languageURLObservable.subscribe(url =>{
  languageURL = url;
});

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "skills", component: SkillsComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "success", component: SuccessComponent },
  { path: "project/:date/:id", component: ProjectComponent },
  { path: "", redirectTo: "/home", pathMatch:"full" },
  { path: "**", component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    PagenotfoundComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
