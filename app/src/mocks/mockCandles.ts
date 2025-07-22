// app/src/mocks/mockCandles.ts

export interface Candle {
  openTime: number;   // timestamp em ms (Binance usa em ms)
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  closeTime: number;  // timestamp em ms
}

// 4 candles de 1h para SOLUSDT (valores fictícios)
export const mockCandles: Candle[] = [
  {
    openTime: 1721400000000,
    open: 143.25,
    high: 144.90,
    low: 142.80,
    close: 144.00,
    volume: 1200.5,
    closeTime: 1721403599999,
  },
  {
    openTime: 1721403600000,
    open: 144.00,
    high: 145.50,
    low: 143.70,
    close: 145.10,
    volume: 980.7,
    closeTime: 1721407199999,
  },
  {
    openTime: 1721407200000,
    open: 145.10,
    high: 146.30,
    low: 144.90,
    close: 146.00,
    volume: 1130.0,
    closeTime: 1721410799999,
  },
  {
    openTime: 1721410800000,
    open: 146.00,
    high: 146.80,
    low: 145.60,
    close: 146.50,
    volume: 1242.2,
    closeTime: 1721414399999,
  },
];
