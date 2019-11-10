import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { HttpErrorFilter } from '../../shared/http-error.fiter'
import { LoggingInterceptor } from '../../shared/logging-interceptor'

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ]
})
export class CoreModule {}
