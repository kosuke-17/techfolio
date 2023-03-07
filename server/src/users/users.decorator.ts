import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const LoginUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  console.log(request)

  return request.user
})
