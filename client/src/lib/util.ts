/**
 * 文字列を数値に変換して返します。変換に失敗した場合は0を返します。
 *
 * @param v 数値に変換する文字列
 * @returns 文字列の数値化された値、または変換に失敗した場合は0
 */
export const formatNumToString = (v: string) => parseFloat(v) || 0
