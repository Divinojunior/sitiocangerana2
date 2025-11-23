import { FarmData, CalculationResult } from '../types';

export const calculateResults = (data: FarmData): CalculationResult => {
  // 1. PRODUÇÃO
  const vacasLac = data.qtdVacasLac;
  const prodDia = vacasLac * data.litrosVaca;
  const consumoInt = data.qtdBezAmam * data.leiteBezDia;
  
  let prodEntregueDia = prodDia - consumoInt;
  if (prodEntregueDia < 0) prodEntregueDia = 0;
  
  const prodEntregueMes = prodEntregueDia * 30;
  const prodEntregueX2 = prodEntregueDia * 2;
  
  // 2. RECEITA
  const fatBruto = prodEntregueMes * data.precoLeite;
  const impostos = fatBruto * 0.015;
  const fatLiq = fatBruto - impostos;

  // 3. PESSOAL (Com Encargos)
  const somaBaseSalario = data.salOrd1 + data.salTrat1 + data.bonifOrd1 + data.bonifTrat1;
  const encargos = somaBaseSalario * 0.212;
  const custoPessoalTotal = somaBaseSalario + data.salOrd2 + encargos;

  // 4. DESEMBOLSO
  const cConcLac = (vacasLac * data.kgConcLac * 30) * data.pConcLac;
  const cConcPre = (data.qtdPreParto * data.kgConcPre * 30) * data.pConcPre;
  const cRecria = data.custoRecriaFixo;
  const cPolpa = (vacasLac * data.kgPolpa * 30) * data.pPolpa;
  
  const totalConcentrado = cConcLac + cConcPre + cRecria;

  const desembolsoOp = totalConcentrado + cPolpa + data.custoGEA + data.custoLojas + 
                       data.custoAlta + custoPessoalTotal + data.custoOutros;

  // 5. FLUXO
  const saldoOp = fatLiq - desembolsoOp;
  
  const provSilagem = data.provSilagem;
  const provFinanc = data.provFinanc;
  const provAdubo = data.provAdubo;
  
  // Logic from original script: Total Provision includes Encargos again for the final deduction
  const totalProv = provSilagem + provFinanc + provAdubo + encargos;
  const lucro = saldoOp - totalProv;

  // 6. INDICADORES
  const deprec = data.deprecTotal;
  const ebitda = lucro + deprec + provFinanc;
  
  const custoSaidas = desembolsoOp + totalProv;
  
  const custoLitro = prodEntregueMes > 0 ? custoSaidas / prodEntregueMes : 0;
  const endividamento = fatBruto > 0 ? (provFinanc / fatBruto) * 100 : 0;
  
  const custoVar = totalConcentrado + cPolpa + provSilagem;
  const mcu = prodEntregueMes > 0 ? (fatLiq / prodEntregueMes) - (custoVar / prodEntregueMes) : 0;
  
  const peCoe = mcu > 0 ? desembolsoOp / mcu : 0;
  const peCot = mcu > 0 ? (desembolsoOp + deprec) / mcu : 0;
  const peCt = mcu > 0 ? custoSaidas / mcu : 0;

  return {
    vacasLac,
    prodDia,
    prodEntregueDia,
    prodEntregueMes,
    prodEntregueX2,
    fatBruto,
    impostos,
    fatLiq,
    somaBaseSalario,
    encargos,
    custoPessoalTotal,
    totalConcentrado,
    cPolpa,
    cConcLac,
    cConcPre,
    cRecria,
    desembolsoOp,
    saldoOp,
    totalProv,
    lucro,
    ebitda,
    custoLitro,
    endividamento,
    mcu,
    peCoe,
    peCot,
    peCt
  };
};

export const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
};

export const formatNumber = (val: number, decimals = 0) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(val);
};
