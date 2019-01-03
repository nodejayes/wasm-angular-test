import { Component }          from '@angular/core';
import {JsFibonacciService}   from './js-fibonacci.service';
import {WasmFibonacciService} from './wasm-fibonacci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string;
  resultJsFibo: number = 0;
  resultWasmFibo: number = 0;
  runtimeJsFibo: number = 0;
  runtimeWasmFibo: number = 0;

  constructor(private _jsFibo: JsFibonacciService,
              private _wasmFibo: WasmFibonacciService) {}

  start() {
    const NUM = parseInt(this.value);
    if (!isNaN(NUM)) {
      let timer = Date.now();
      this._wasmFibo.fibonacci(NUM).subscribe(v => {
        this.runtimeWasmFibo = Date.now() - timer;
        this.resultWasmFibo = v;
        timer = Date.now();
        this.resultJsFibo = this._jsFibo.fibonacci(NUM);
        this.runtimeJsFibo = Date.now() - timer;
      });
    }
  }
}
