import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersComponent } from './all-players.component';

describe('AllPlayersComponent', () => {
  let component: AllPlayersComponent;
  let fixture: ComponentFixture<AllPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
