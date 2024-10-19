import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackendService } from 'BackendService';
import { Result } from 'Models/Result';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './FirstPage.component.html',
  styleUrls: ['./FirstPage.component.css'],
})
export class FirstPageComponent implements OnInit {

  resultPromise: Promise<Result | undefined> | undefined;
  result: Result | undefined;
  message: string | undefined;

  constructor(private backendService: BackendService) { }

  async ngOnInit() {}

  async calculateTax(strValue: string) {
    this.clean();
    try {
      const value: number = Number(strValue);
      console.log("Parsed value:", value);

      if (value != null && value > 0) {
        try {
          this.resultPromise = this.backendService.calculateTax(value);
        } catch (error) {
          console.error('Error calculating tax:', error);
          this.message = "Error calculating tax";
        }

        this.resultPromise?.then(data => {
          if (data != null) {
            this.result = data;
            console.count("here is the result = " + data.netAnual);
          }
          else {
            this.message = "Error: No Result";
          }
        });
      }
      else {
        this.message = "Value must be above 0";
      }
    }
    catch {
      this.message = " Invalid Value";
    }
  }

  clean() {
    this.result = undefined;
    this.message = "";
  }
}
