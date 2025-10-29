import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from '../database/entities/article.entity';
import { Category } from '../database/entities/category.entity';
import { ArticleRepository } from '../database/repositories/article.repository';
import { CategoryRepository } from '../database/repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Category])],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticleRepository, CategoryRepository],
  exports: [ArticlesService, ArticleRepository],
})
export class ArticlesModule {}
