import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDatabaseMappingComponent } from './field-database-mapping.component';

describe('FieldDatabaseMappingComponent', () => {
  let component: FieldDatabaseMappingComponent;
  let fixture: ComponentFixture<FieldDatabaseMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldDatabaseMappingComponent]
    });
    fixture = TestBed.createComponent(FieldDatabaseMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
