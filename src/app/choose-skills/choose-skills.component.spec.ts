import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSkillsComponent } from './choose-skills.component';

describe('ChooseSkillsComponent', () => {
  let component: ChooseSkillsComponent;
  let fixture: ComponentFixture<ChooseSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
