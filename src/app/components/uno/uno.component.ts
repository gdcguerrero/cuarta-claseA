import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  public formularioLogin!: FormGroup;
  constructor () { } //(private formControl: FormControl, private formGroup: FormGroup)

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      name : new FormControl ('',[Validators.maxLength(10),Validators.minLength(5),Validators.required]),
      email : new FormControl ('', [Validators.required]),
      password : new FormControl ('',[Validators.required]),
      telefono : new FormControl ('',[Validators.pattern('^[0-9]*$'), Validators.required])
    })
  }

  onSubmit(){
    this.formularioLogin.markAsDirty();
    this.formularioLogin.markAsTouched();
    this.markAllAsDisty();
    if (this.formularioLogin.invalid) {
      return
    }
    console.log(this.formularioLogin);
    console.log(this.formularioLogin.get('name')?.value);
    console.log(this.formularioLogin.get('email')?.value);
    console.log(this.formularioLogin.get('password')?.value);
    console.log(this.formularioLogin.get('telefono')?.value);
    // enviar datos al servidor
  }

  validation(event : any){
    let number = (event.target as HTMLInputElement).value.replace(/[^0-9]|[*÷×]/g,'');
    (event.target as HTMLInputElement).value = number
  }

  markAllAsDisty(){
    this.formularioLogin.get('name')?.markAsDirty();
    this.formularioLogin.get('email')?.markAsDirty();
    this.formularioLogin.get('password')?.markAsDirty();
    this.formularioLogin.get('telefono')?.markAsDirty();
  }
}
