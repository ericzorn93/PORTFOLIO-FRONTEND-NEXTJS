import { TestBed } from '@angular/core/testing';

import { AllPlayersService } from './all-players.service';

describe('AllPlayersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPlayersService = TestBed.get(AllPlayersService);
    expect(service).toBeTruthy();
  });
});
