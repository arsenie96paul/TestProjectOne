import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageComponent } from './FirstPage.component';
import { BackendService } from 'BackendService';
import { Result } from 'Models/Result';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;
  let backendService: jasmine.SpyObj<BackendService>;

  beforeEach(async () => {
    const backendServiceSpy = jasmine.createSpyObj('BackendService', ['calculateTax']);

    await TestBed.configureTestingModule({
      imports: [FirstPageComponent], 
      providers: [
        { provide: BackendService, useValue: backendServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    backendService = TestBed.inject(BackendService) as jasmine.SpyObj<BackendService>;
  });

  it('should calculate tax correctly', async () => {

    const mockResult: Result = {
      grossAnual: 50000,
      grossMonthly: 4167,
      netAnual: 40000,
      netMonthly: 3333,
      taxAnual: 10000,
      taxMonthly: 833
    };

    backendService.calculateTax.and.returnValue(Promise.resolve(mockResult)); 
    
    await component.calculateTax('50000'); 
    fixture.detectChanges();
    expect(component.result).toEqual(mockResult); 
    expect(component.message).toBe("");
  });

  it('should show message for value below or equal to zero', async () => {
    await component.calculateTax('-3'); 
    fixture.detectChanges();
    expect(component.message).toBe("Value must be above 0"); 
  });
});
