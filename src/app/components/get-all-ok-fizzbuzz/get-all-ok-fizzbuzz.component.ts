import { Component, OnInit } from '@angular/core';
import { FizzbuzzOk } from 'src/app/models/fizzbuzz-ok.model';
import { FizzbuzzServicesService } from 'src/app/services/fizzbuzz-services.service';


@Component({
  selector: 'app-get-all-ok-fizzbuzz',
  templateUrl: './get-all-ok-fizzbuzz.component.html',
  styleUrls: ['./get-all-ok-fizzbuzz.component.css']
})
export class GetAllOkFizzbuzzComponent implements OnInit {

  fizzbuzzOk_List?: FizzbuzzOk[];

  constructor(private service: FizzbuzzServicesService) { }

  ngOnInit(): void {
    this.getAllFizzBuzzOkList();
  }

  getAllFizzBuzzOkList(): void {
    this.service.getAllFizzBuzzOk()
      .subscribe({
        next: (data: any) => {
          this.fizzbuzzOk_List = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
