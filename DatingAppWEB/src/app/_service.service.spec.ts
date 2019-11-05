/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { _serviceService } from './_service.service';

describe('Service: _service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [_serviceService]
    });
  });

  it('should ...', inject([_serviceService], (service: _serviceService) => {
    expect(service).toBeTruthy();
  }));
});
