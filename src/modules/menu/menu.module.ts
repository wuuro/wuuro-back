import { Module } from '@nestjs/common'
import { MenuController } from '../menu/controller/menu.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Menu } from '../entitys/menu.entity'
import { MenuService } from './services/menu.service'

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule {}
