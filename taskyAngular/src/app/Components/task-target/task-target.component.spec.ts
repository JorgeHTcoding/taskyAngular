import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTargetComponent } from './task-target.component';

describe('TaskTargetComponent', () => {
  let component: TaskTargetComponent;
  let fixture: ComponentFixture<TaskTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
