import { TestBed } from '@angular/core/testing';

import { JsFibonacciService } from './js-fibonacci.service';

describe('JsFibonacciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsFibonacciService = TestBed.get(JsFibonacciService);
    expect(service).toBeTruthy();
  });
});
