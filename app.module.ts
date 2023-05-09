import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimerModule } from './timer/timer.module';
import { ErreurModule } from './erreur/erreur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TimerController } from './timer/timer.controller';
import { TimerService } from './timer/timer.service';
import { ErreurController } from './erreur/erreur.controller';
import { ErreurService } from './erreur/erreur.service';
import { Timer } from './timer/timer.entity';
import { Erreur } from './erreur/erreur.entity';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([Timer]),TypeOrmModule.forFeature([Erreur]),TimerModule, ErreurModule],
  controllers: [AppController, TimerController, ErreurController],
  providers: [AppService, TimerService, ErreurService],
  exports: [],
})
export class AppModule {}
