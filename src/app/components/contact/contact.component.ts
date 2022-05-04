import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(languageService:LanguageServiceService, private netlifyForms: NetlifyFormsService) { 
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
        alert("¡Enviado satisfactoriamente!");
      },
      (err) => {
        this.loading = false;
        this.emailFailed = true;
        setTimeout(() => {
          this.emailFailed = false;
        }, 10000);
      }
    );
  }

  ngOnDestroy() {
    this.formStatusSub ? this.formStatusSub.unsubscribe() : null;
  }

}
