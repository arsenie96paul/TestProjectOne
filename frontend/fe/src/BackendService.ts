import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './Models/Result';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'https://localhost:7106';

  constructor(private http: HttpClient) {}

  calculateTax(value: number): Promise<Result | undefined>{
    return this.http.get<Result>(`${this.apiUrl}/tax/calculate/${value}`).toPromise();
  }

}
``