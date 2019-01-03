import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsFibonacciService {

  constructor() { }

  fibonacci(n: number): number {
    if (n == 0 || n == 1)
      return n;
    else
      return (this.fibonacci(n - 1) + this.fibonacci(n - 2));
  }
}
