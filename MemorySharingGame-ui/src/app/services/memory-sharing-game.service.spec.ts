import { TestBed } from '@angular/core/testing';

import { MemorySharingGameService } from './memory-sharing-game.service';

describe('MemorySharingGameService', () => {
  let service: MemorySharingGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorySharingGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
