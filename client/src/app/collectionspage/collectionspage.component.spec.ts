import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionspageComponent } from './collectionspage.component';

describe('CollectionspageComponent', () => {
  let component: CollectionspageComponent;
  let fixture: ComponentFixture<CollectionspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
