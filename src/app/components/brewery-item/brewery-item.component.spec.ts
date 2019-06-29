import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryItemComponent } from './brewery-item.component';

describe('BreweryItemComponent', () => {
  let component: BreweryItemComponent;
  let fixture: ComponentFixture<BreweryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
