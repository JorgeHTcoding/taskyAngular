import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProjectComponent } from './info-project.component';

describe('InfoProjectComponent', () => {
  let component: InfoProjectComponent;
  let fixture: ComponentFixture<InfoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
