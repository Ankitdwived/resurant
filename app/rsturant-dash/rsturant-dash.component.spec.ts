import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsturantDashComponent } from './rsturant-dash.component';

describe('RsturantDashComponent', () => {
  let component: RsturantDashComponent;
  let fixture: ComponentFixture<RsturantDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsturantDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsturantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
