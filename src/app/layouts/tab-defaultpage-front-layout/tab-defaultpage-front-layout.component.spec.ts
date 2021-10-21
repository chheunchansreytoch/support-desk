import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDefaultpageFrontLayoutComponent } from './tab-defaultpage-front-layout.component';

describe('TabDefaultpageFrontLayoutComponent', () => {
  let component: TabDefaultpageFrontLayoutComponent;
  let fixture: ComponentFixture<TabDefaultpageFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDefaultpageFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDefaultpageFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
