import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private zone: NgZone) {}
  sending = false;
  errorMsg = '';
  successMsg = '';

  // Replace these with your EmailJS values
  EMAILJS_SERVICE_ID = 'service_hduea8p';
  EMAILJS_TEMPLATE_ID = 'template_i9iohyh';
  EMAILJS_USER_ID = 'dNk9poMd-JdvOuE9k';

  onSubmit(form?: any) {
    if (!form || !form.value) return;
    this.sending = true;
    this.errorMsg = '';
    this.successMsg = '';
    const { name, email, message } = form.value;
    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      { name, email, message },
      this.EMAILJS_USER_ID
    ).then(
      (result: EmailJSResponseStatus) => {
        this.zone.run(() => {
          this.sending = false;
          form.resetForm();
          this.successMsg = 'Thank you for reaching out! I will get back to you soon.';
          setTimeout(() => {
            this.zone.run(() => {
              this.successMsg = '';
            });
          }, 4000);
        });
      },
      (error) => {
        this.zone.run(() => {
          this.errorMsg = 'Failed to send message.';
          this.sending = false;
        });
      }
    );
  }
}




