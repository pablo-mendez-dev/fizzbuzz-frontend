import { Component, OnInit } from '@angular/core';
import { FizzbuzzError } from 'src/app/models/fizzbuzz-error.model';
import { FizzbuzzServicesService } from 'src/app/services/fizzbuzz-services.service';


@Component({
  selector: 'app-get-all-error-fizzbuzz',
  templateUrl: './get-all-error-fizzbuzz.component.html',
  styleUrls: ['./get-all-error-fizzbuzz.component.css']
})
export class GetAllErrorFizzbuzzComponent implements OnInit {

  fizzbuzzError_List?: FizzbuzzError[];

  constructor(private service: FizzbuzzServicesService) { }

  ngOnInit(): void {
    this.getAllFizzBuzzErrorList();
  }

  getAllFizzBuzzErrorList(): void {
    this.service.getAllFizzBuzzError()
      .subscribe({
        next: (data: any) => {
          this.fizzbuzzError_List = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
