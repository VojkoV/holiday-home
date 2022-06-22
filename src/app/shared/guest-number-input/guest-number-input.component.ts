import { Component, OnInit } from '@angular/core';

export class NumberOfGuests {
  constructor(public adults: number, public children: number) {}
  totalCount = this.adults + this.children + "";
}

@Component({
  selector: 'app-guest-number-input',
  templateUrl: './guest-number-input.component.html',
  styleUrls: ['./guest-number-input.component.css'],
})
export class GuestNumberInputComponent implements OnInit {
  numberOfGuests: NumberOfGuests = new NumberOfGuests(0, 0);
  constructor() {}

  ngOnInit(): void {}
}
