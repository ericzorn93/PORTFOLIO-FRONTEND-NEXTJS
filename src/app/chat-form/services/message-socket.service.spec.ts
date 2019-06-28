import { TestBed } from '@angular/core/testing';

import { MessageSocketService } from './message-socket.service';

describe('MessageSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageSocketService = TestBed.get(MessageSocketService);
    expect(service).toBeTruthy();
  });
});
