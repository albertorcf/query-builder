// app/src/mocks/contextHelpers.ts
import { Candle } from './mockCandles';

// Função para buscar candle anterior
export function getPrevCandle(candles: Candle[], index: number): Candle | null {
  return index > 0 ? candles[index - 1] : null;
}

// Exemplo: calcular média móvel simples (SMA)
export function sma(candles: Candle[], window: number, index: number): number | null {
  if (index + 1 < window) return null;
  const slice = candles.slice(index + 1 - window, index + 1);
  const sum = slice.reduce((acc, c) => acc + c.close, 0);
  return sum / window;
}
