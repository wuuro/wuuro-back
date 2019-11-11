import { Injectable, createParamDecorator } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult, ObjectID } from 'typeorm'
import { Menu } from '../../entitys/menu.entity'

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find()
  }

  async findId(idMenu: ObjectID): Promise<Menu> {
    return await this.menuRepository.findOne(idMenu)
  }

  async save(menu: Menu): Promise<Menu> {
    const m = new Menu()
    m.name = menu.name
    m.description = menu.description

    return await this.menuRepository.save(m)
  }

  async update(menu: Menu): Promise<UpdateResult> {
    return await this.menuRepository.update(menu.id, menu)
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.menuRepository.delete(id)
  }
}
