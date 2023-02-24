import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../server/swagger.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/store/api/codegen/auth.ts': {
      filterEndpoints: [/auth/i],
    },
    './src/store/api/codegen/user.ts': {
      filterEndpoints: [/UsersController/i],
    },
  },
  hooks: true,
}

export default config
