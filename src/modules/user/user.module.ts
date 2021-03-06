import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './repositories/user.repository'
import { UserService } from './services/user.service'
import { UserController } from './controllers/user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
