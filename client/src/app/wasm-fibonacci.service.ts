import { Injectable }                from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, mergeMap, take}      from 'rxjs/operators';
import {fromPromise}                 from 'rxjs/internal-compatibility';

// make WebAssembly namespace available
declare const WebAssembly;
// make the WASM Module available
declare const Module;

@Injectable()
export class WasmFibonacciService {
  module;
  assemblyReady = new BehaviorSubject(false);

  constructor() {
    this.initWasm();
  }

  /**
   * load the Wasm File and create the Module
   */
  async initWasm() {
    const wasmFile = await fetch('assets/fibonacci.wasm');
    const buffer = await wasmFile.arrayBuffer();
    const waModul = await WebAssembly.instantiate(buffer);
    this.module = Module(waModul);
    this.assemblyReady.next(true);
  }

  /**
   * wraps the Call to the API
   *
   * wrap the call into a Observable to be sure the WASM Module is init before call
   * wrap the call into a Promise and Timeout Function to non blocking the ui
   * @param input
   */
  fibonacci(input: number): Observable<number> {
    return this.assemblyReady.pipe(
      filter(v => v === true),
      mergeMap(() => fromPromise(new Promise((resolve) => {
        setTimeout(() => {
          const result = this.module._fibonacci(input);
          resolve(result);
        });
      }))),
      take(1)
    );
  }
}
