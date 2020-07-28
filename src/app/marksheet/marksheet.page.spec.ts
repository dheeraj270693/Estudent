import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarksheetPage } from './marksheet.page';

describe('MarksheetPage', () => {
  let component: MarksheetPage;
  let fixture: ComponentFixture<MarksheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarksheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
