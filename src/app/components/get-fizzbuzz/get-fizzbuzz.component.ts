import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FizzbuzzServicesService } from 'src/app/services/fizzbuzz-services.service';


@Component({
  selector: 'app-get-fizzbuzz',
  templateUrl: './get-fizzbuzz.component.html',
  styleUrls: ['./get-fizzbuzz.component.css']
})
export class GetFizzbuzzComponent implements OnInit {

  response = '';
  min = '';
  max = '';

  form: FormGroup = new FormGroup({
    min: new FormControl(''),
    max: new FormControl(''),
  });
  submitted = false;
  private formBuilder: FormBuilder = new FormBuilder;

  constructor(private service: FizzbuzzServicesService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        min: ['', Validators.required],
        max: ['', Validators.required],
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.getFizzBuzz();
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.response = "";
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  getFizzBuzz(): void {
    this.service.getFizzBuzz(this.min, this.max).subscribe({
      next: (data) => {
        this.response = JSON.stringify(data);
        console.log(this.response);
      },
      error: (e) => {
        this.response = JSON.stringify(e.error);
        console.log(this.response);
      },
    });
  }

}
