import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { NetlifyFormsService } from 'src/app/services/netlify-forms.service';
import { Feedback } from './feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //VARIABLES 
  languagesJSON$: Observable<any>;
  private formStatusSub: Subscription = new Subscription;
  email: string = "";
  fullname: string = "";
  subject: string = "";
  message: string = "";

  loading: any;
  emailSent: any;
  emailFailed: any;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService, private netlifyForms: NetlifyFormsService, private router:Router) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

  sendContact(contactForm: NgForm) {
    if (
      contactForm.invalid
    ) {
      return;
    }

    if(this.email != "" && this.fullname != "" && this.subject != "" && this.message != ""){
      const data = {
        email: this.email,
        fullname: this.fullname,
        subject: this.subject,
        message: this.message
      };
  
      const entry = {
        ...data,
      } as Feedback;
  
      this.formStatusSub = this.netlifyForms.submitFeedback(entry).subscribe(
        (res) => {
          this.loading = false;
          this.emailSent = true;
          setTimeout(() => {
            this.emailSent = false;
          }, 10000);
          contactForm.resetForm();
          this.router.navigate(['success']);
        },
        (err) => {
          this.loading = false;
          this.emailFailed = true;
          setTimeout(() => {
            this.emailFailed = false;
          }, 10000);
        }
      );
    }else{
      if(this.email == ""){
        let elementError = document.getElementById("email");
        if(elementError != null){
          elementError.style.border = ".1em solid red";
        }        
      }else{
        let elementError = document.getElementById("email");
        if(elementError != null){
          elementError.style.border = ".1em solid var(--border-blue)";
        }  
      }

      if(this.fullname == ""){
        let elementError = document.getElementById("fullname");
        if(elementError != null){
          elementError.style.border = ".1em solid red";
        } 
      }else{
        let elementError = document.getElementById("fullname");
        if(elementError != null){
          elementError.style.border = ".1em solid var(--border-blue)";
        }  
      }

      if(this.subject == ""){
        let elementError = document.getElementById("subject");
        if(elementError != null){
          elementError.style.border = ".1em solid red";
        } 
      }else{
        let elementError = document.getElementById("subject");
        if(elementError != null){
          elementError.style.border = ".1em solid var(--border-blue)";
        }  
      }

      if(this.message == ""){
        let elementError = document.getElementById("message");
        if(elementError != null){
          elementError.style.border = ".1em solid red";
        } 
      }else{
        let elementError = document.getElementById("message");
        if(elementError != null){
          elementError.style.border = ".1em solid var(--border-blue)";
        }  
      }
      let tagError = document.getElementById("errorMessage");
      if(tagError != null){
        tagError.innerHTML = 'Fill in all the fields';
      }
    }    
  }

  ngOnDestroy() {
    this.formStatusSub ? this.formStatusSub.unsubscribe() : null;
  }

}
