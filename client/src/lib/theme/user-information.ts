/**
 * 経験した期間をstringにして返す
 * @param exp number 経験した期間
 * @returns string
 */
export const getExpAmountLabel = (expAmount: number) => {
  return expAmount.toString() + 'ヶ月'
}
