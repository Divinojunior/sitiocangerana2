import { FarmData } from './types';

export const INITIAL_DATA: FarmData = {
  // 1. Production
  qtdVacasLac: 40.0,
  litrosVaca: 25.0,
  precoLeite: 2.60,
  qtdBezAmam: 6.6667,
  leiteBezDia: 6.0,
  qtdPreParto: 8.0,
  qtdSecas: 4.0,
  qtdRecria: 20.0,

  // 2. Personnel
  salOrd1: 3278.88,
  salTrat1: 3278.88,
  bonifOrd1: 1007.20,
  bonifTrat1: 1007.20,
  salOrd2: 2459.16,

  // 3. Nutrition Prices
  pConcLac: 2.0,
  pConcPre: 2.7,
  pPolpa: 1.6,
  pSilagem: 180.0,

  // 4. Nutrition Consumption
  kgConcLac: 10.0,
  kgConcPre: 3.0,
  kgPolpa: 0.0,
  kgSilLac: 34.0,
  kgSilPre: 25.0,
  kgSilSeca: 25.0,

  // 5. Other Costs
  custoGEA: 816.61,
  custoLojas: 3324.64,
  custoAlta: 782.22,
  custoOutros: 7685.80,
  custoRecriaFixo: 3883.50,

  // 6. Provisions
  provSilagem: 11340.0,
  provFinanc: 1151.44,
  provAdubo: 0.0,
  deprecTotal: 2000.0
};
