import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMysteryComponent } from './edit-mystery.component';

describe('EditMysteryComponent', () => {
  let component: EditMysteryComponent;
  let fixture: ComponentFixture<EditMysteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMysteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
