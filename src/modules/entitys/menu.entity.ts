import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Menu {
  @ObjectIdColumn()
  id: ObjectID

  @Column({ length: 500 })
  name: string

  @Column('text')
  description: string
}
