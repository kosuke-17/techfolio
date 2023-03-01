import { z } from 'zod'

export const requiredString = z
  .string()
  .min(1, { message: '1文字以上入力する必要があります。' })
export const requiredEmailString = z
  .string()
  .min(1, { message: '1文字以上入力する必要があります。' })
  .email({ message: 'メールアドレスの形式ではありません。' })
