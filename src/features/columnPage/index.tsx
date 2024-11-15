import { FC } from 'react';
import { Button } from '@/components/button';
import { ColumnCategoryCard } from './components/ColumnCategoryCard';
import { ArticleCard } from './components/ArticleCard';
import { useColumnCategories } from './hooks/useColumnCategories';
import { useColumnArticles } from './hooks/useColumnArticles';

const ArticlesPage: FC = () => {
  const { categories } = useColumnCategories();
  const { articles, loadMore, hasMore } = useColumnArticles();

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <ColumnCategoryCard key={category.id} {...category} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            variant="default"
            size="lg"
            className="text-white !rounded w-full max-w-[296px]"
            onClick={loadMore}
          >
            コラムをもっと見る
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
