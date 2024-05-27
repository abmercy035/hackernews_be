import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DBClientModule } from './prisma.service';
import { User, Prisma } from '@prisma/client';
@Module({
  imports: [UsersModule, DBClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
