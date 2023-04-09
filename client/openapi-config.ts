import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../server/swagger.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/store/api/codegen/app.ts': {
      filterEndpoints: [/appController/i],
    },
    './src/store/api/codegen/portfolio.ts': {
      filterEndpoints: [/PortfoliosController/i],
    },
    './src/store/api/codegen/user.ts': {
      filterEndpoints: [/UsersController/i],
    },
    './src/store/api/codegen/user-information.ts': {
      filterEndpoints: [/UserInformationsController/i],
    },
  },
  hooks: true,
}

export default config
