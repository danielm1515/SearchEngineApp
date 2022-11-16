import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineInputComponent } from './search-engine-input.component';

describe('SearchEngineInputComponent', () => {
  let component: SearchEngineInputComponent;
  let fixture: ComponentFixture<SearchEngineInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEngineInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEngineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
