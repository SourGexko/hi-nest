import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // URL을 가져와서 함수를 실행
  providers: [AppService],
})
export class AppModule {}
