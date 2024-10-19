export class Result {
  grossAnual: number;
  grossMonthly: number;
  netAnual: number;
  netMonthly: number;
  taxAnual: number;
  taxMonthly: number;

  constructor(
      grossAnual: number,
      grossMonthly: number,
      netAnual: number,
      netMonthly: number,
      taxAnual: number,
      taxMonthly: number
  ) {
      this.grossAnual = grossAnual;
      this.grossMonthly = grossMonthly;
      this.netAnual = netAnual;
      this.netMonthly = netMonthly;
      this.taxAnual = taxAnual;
      this.taxMonthly = taxMonthly;
  }
}
