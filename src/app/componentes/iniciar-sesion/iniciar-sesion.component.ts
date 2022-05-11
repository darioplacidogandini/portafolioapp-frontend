import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private ruta:Router) { 
    this.form = this.formBuilder.group (
      {
        mail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('mail');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event:Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.ruta.navigate(['/portfolio']);
    } else {
      this.form.markAllAsTouched;
    }
  }
}
