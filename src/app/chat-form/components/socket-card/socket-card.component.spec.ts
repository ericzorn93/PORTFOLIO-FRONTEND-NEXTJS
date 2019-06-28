import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketCardComponent } from './socket-card.component';

describe('SocketCardComponent', () => {
  let component: SocketCardComponent;
  let fixture: ComponentFixture<SocketCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
