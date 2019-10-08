import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = '';
  public commentaires:User[] =[];

  onSubmit(f: NgForm) {
    this.commentaires.push(new User(f.value.pseudo, f.value.choice, f.value.text))
  }
}

