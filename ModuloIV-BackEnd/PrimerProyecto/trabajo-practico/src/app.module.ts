import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from './app.service';
import { JsonplaceService } from './jsonplace/jsonplace.service';
import { JsonplaceController } from './jsonplace/jsonplace.controller';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath: join(__dirname,'..','client')})],
  controllers: [AppController, JsonplaceController],
  providers: [AppService, JsonplaceService],
})
export class AppModule {}
