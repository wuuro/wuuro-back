import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'
import { MenuService } from '../services/menu.service'
import { Menu } from '../../entitys/menu.entity'
import { DeleteResult, UpdateResult } from 'typeorm'

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getMenu(): Promise<Menu[]> {
    return this.menuService.findAll()
  }

  @Get(':idMenu')
  getMenuId(@Param() { idMenu }) {
    return this.menuService.findId(idMenu)
  }

  @Post()
  async save(@Body() menu: Menu): Promise<Menu> {
    return this.menuService.save(menu)
  }

  @Put()
  async update(@Body() menu: Menu): Promise<UpdateResult> {
    return this.menuService.update(menu)
  }

  @Delete(':idMenu')
  async delete(@Param() { idMenu }): Promise<DeleteResult> {
    return this.menuService.delete(idMenu)
  }
}
