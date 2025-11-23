export interface FarmData {
  // 1. Production
  qtdVacasLac: number;
  litrosVaca: number;
  precoLeite: number;
  qtdBezAmam: number;
  leiteBezDia: number;
  qtdPreParto: number;
  qtdSecas: number;
  qtdRecria: number;

  // 2. Personnel
  salOrd1: number; // Ordenhador 1
  salTrat1: number; // Tratador 1
  bonifOrd1: number;
  bonifTrat1: number;
  salOrd2: number; // Ordenhador 2 (Outros s/ encargo na lógica original)

  // 3. Nutrition Prices
  pConcLac: number;
  pConcPre: number;
  pPolpa: number;
  pSilagem: number; // Valor Ton

  // 4. Nutrition Consumption
  kgConcLac: number;
  kgConcPre: number;
  kgPolpa: number;
  kgSilLac: number;
  kgSilPre: number;
  kgSilSeca: number;

  // 5. Other Costs
  custoGEA: number;
  custoLojas: number;
  custoAlta: number;
  custoOutros: number;
  custoRecriaFixo: number;

  // 6. Provisions
  provSilagem: number;
  provFinanc: number;
  provAdubo: number;
  deprecTotal: number;
}

export type ViewMode = 'variaveis' | 'resultados';

export interface CalculationResult {
  vacasLac: number;
  prodDia: number;
  prodEntregueDia: number;
  prodEntregueMes: number;
  prodEntregueX2: number;
  
  fatBruto: number;
  impostos: number;
  fatLiq: number;
  
  somaBaseSalario: number;
  encargos: number;
  custoPessoalTotal: number;
  
  totalConcentrado: number;
  cPolpa: number;
  cConcLac: number;
  cConcPre: number;
  cRecria: number;
  
  desembolsoOp: number;
  saldoOp: number;
  
  totalProv: number;
  lucro: number;
  
  ebitda: number;
  custoLitro: number;
  endividamento: number;
  
  mcu: number;
  peCoe: number;
  peCot: number;
  peCt: number;
}
