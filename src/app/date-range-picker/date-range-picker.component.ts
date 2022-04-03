import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  numberOfMonthsInCalendar: number = 3;
  maxDateValue: Date;
  minDateValue: Date;
  disabledDates: Date[] = [];
  dateObjectList;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    // detect screen size changes
    this.breakpointObserver
      .observe(['(max-width: 1500px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) this.numberOfMonthsInCalendar = 1;
        else this.numberOfMonthsInCalendar = 2;
        console.log(this.numberOfMonthsInCalendar);
      });

    this.minDateValue = new Date();
    this.maxDateValue = new Date();
    this.maxDateValue.setMonth(this.maxDateValue.getMonth() + 12);

    this.disabledDates.push(new Date());
    var dateToPush = new Date();
    dateToPush.setDate(dateToPush.getDate() + 2);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 2);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 2);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));
    dateToPush.setDate(dateToPush.getDate() + 1);
    this.disabledDates.push(new Date(dateToPush));

    this.dateObjectList = this.getDaysArray(
      this.minDateValue,
      this.maxDateValue
    );
    console.log(this.dateObjectList);
  }

  ngOnInit(): void {
  }

  getDaysArray(start: Date, end: Date) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push({
        day: dt.getDate(),
        month: dt.getMonth(),
        year: dt.getFullYear(),
        price: this.getRandomInt(90, 200),
      });
    }
    return arr;
  }

  getPriceFromDate(date: {
    day: number;
    month: number;
    year: number;
  }): number | undefined {
    if (
      this.disabledDates.findIndex(
        (x) =>
          x.getDate() == date.day &&
          x.getMonth() == date.month &&
          x.getFullYear() == date.year
      ) !== -1
    )
      return;
    return this.dateObjectList.find(
      (x) => x.day == date.day && x.month == date.month && x.year == date.year
    )?.price;
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
