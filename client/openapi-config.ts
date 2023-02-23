import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../server/swagger.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/store/api/auth.ts': {
      filterEndpoints: [/auth/i],
    },
    './src/store/api/user.ts': {
      filterEndpoints: [/users/i],
    },
  },
  hooks: true,
}

export default config
