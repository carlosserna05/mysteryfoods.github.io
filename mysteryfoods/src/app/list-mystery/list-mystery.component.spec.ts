import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMysteryComponent } from './list-mystery.component';

describe('ListMysteryComponent', () => {
  let component: ListMysteryComponent;
  let fixture: ComponentFixture<ListMysteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMysteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
