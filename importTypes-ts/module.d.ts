interface Band {
  /** 主唱 */
  vocal: string;
  /** 吉他 */
  guitar: string;
  /** 貝斯 */
  bass: string;
  /** 鼓手 */
  drummer: string;
}

/** 團結樂團 */
export const kessokuBand: Band;

/**
 * 傳入任意數量的數字，回傳加總後的數值
 * @param args - 任意數字
 * @example
 *
 *    sum(1,2,3) // 6
 */
export function sum(...args: number[]): number;
