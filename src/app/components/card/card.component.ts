import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModel } from './card.types';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardForm!: FormGroup
  cardModel!: CardModel

  constructor(private toastr: ToastrService) {
    this.cardForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      address_number: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),  
    })
  }

  submit() {
    if(this.cardForm.valid) {
      this.cardModel = {
        ...this.cardForm.value
      }
      this.cardForm.reset()
      this.toastr.success('Cartão criado com sucesso!')
    } else {
      this.toastr.error('Favor verifiar se todos campos foram preenchidos')
    }
  }
}


