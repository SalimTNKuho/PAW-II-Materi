import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimarketApp } from './minimarket-app';

describe('MinimarketApp', () => {
  let component: MinimarketApp;
  let fixture: ComponentFixture<MinimarketApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimarketApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimarketApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
