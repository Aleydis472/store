import { Component, Input, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges, OnInit {
  @Input() duration: number = 0;
  @Input() message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()    
    }
  } 

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('-' .repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      
      this.counter.update(statePrev => statePrev + 1)
    }, 1000)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentInit'); 
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration')
  }
}
