import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-and-op',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-op.component.html',
  styleUrl: './obs-and-op.component.scss',
})
export class ObsAndOpComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  observe = new Observable((obs) => {
    console.log('Observable Starts');
    setTimeout(() => {
      obs.next('1');
    }, 1000);
    setTimeout(() => {
      obs.next('2');
    }, 2000);
    setTimeout(() => {
      obs.next('3');
    }, 3000);
    setTimeout(() => {
      obs.next('4');
    }, 4000);
    setTimeout(() => {
      obs.next('5');
    }, 5000);
    setTimeout(() => {
      obs.complete();
    }, 5000);
  });

  ngOnInit(): void {
    this.sub = this.observe.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
        console.log('Error');
      },
      complete: () => {
        console.log('Completed !');
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('Observer stopped.');
  }
}
