import { TestBed } from '@angular/core/testing';

import { ColoniaService } from './colonia.service';

describe('ColoniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoniaService = TestBed.get(ColoniaService);
    expect(service).toBeTruthy();
  });
});
