import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//這邊若使用第 8 版後的 NestJS 需要另外使用 npm install @nestjs/axios 進行安裝。
import { HttpModule } from '@nestjs/axios';
import{Agent} from 'https';

@Module({
  //imports: [HttpModule],
  imports:[ HttpModule.register({
    httpsAgent: new Agent({ rejectUnauthorized: false })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
