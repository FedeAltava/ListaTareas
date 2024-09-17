import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedeComponenteComponent } from './fede-componente.component';

describe('FedeComponenteComponent', () => {
  let component: FedeComponenteComponent;
  let fixture: ComponentFixture<FedeComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FedeComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FedeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
