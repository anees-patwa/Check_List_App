import { TestBed } from '@angular/core/testing';

import { ListCoreLogicService } from './list-core-logic.service';

describe('ListCoreLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCoreLogicService = TestBed.get(ListCoreLogicService);
    expect(service).toBeTruthy();
  });
});
