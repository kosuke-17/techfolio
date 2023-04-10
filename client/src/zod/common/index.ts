import { z } from 'zod'

// optional
export const optionalString = z.string()

// required
export const requiredString = z
  .string()
  .min(1, { message: '1文字以上入力する必要があります。' })
export const requiredEmailString = z
  .string()
  .min(1, { message: '1文字以上入力する必要があります。' })
  .email({ message: 'メールアドレスの形式ではありません。' })
export const requiredNumber = z
  .number()
  .min(0, { message: '0以上の数値を入力する必要があります。' })
export const requiredDate = z.date()
