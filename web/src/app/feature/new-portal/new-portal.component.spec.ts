import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@shared/shared.module';
import { NewPortalComponent } from './new-portal.component';

describe('NewPortalComponent', () => {
  let component: NewPortalComponent;
  let fixture: ComponentFixture<NewPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPortalComponent ],
      imports: [ SharedModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
