import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2202Page } from './t2202.page';

describe('T2202Page', () => {
  let component: T2202Page;
  let fixture: ComponentFixture<T2202Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2202Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2202Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
