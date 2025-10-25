import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultaAggModule } from './consulta-agg/consulta-agg.module';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConsultasNegociosModule } from './consultas-negocios/consultas-negocios.module';
import { FiltroAvanzadoModule } from './filtro-avanzado/filtro-avanzado.module';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConsultaAggModule,
    ConsultasNegociosModule,
    FiltroAvanzadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
