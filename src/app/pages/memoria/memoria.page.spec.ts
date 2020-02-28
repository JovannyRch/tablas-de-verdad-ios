import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoriaPage } from './memoria.page';

describe('MemoriaPage', () => {
  let component: MemoriaPage;
  let fixture: ComponentFixture<MemoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
