import { TestBed } from '@angular/core/testing';

import { WasmFibonacciService } from './wasm-fibonacci.service';

describe('WasmFibonacciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WasmFibonacciService = TestBed.get(WasmFibonacciService);
    expect(service).toBeTruthy();
  });
});
