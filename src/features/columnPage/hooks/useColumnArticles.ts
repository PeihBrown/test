import { useState, useCallback } from 'react';
import { ColumnArticle } from '../types';
import Thumbnail1 from '@/features/columnPage/assets/imgs/column-1.webp';
import Thumbnail2 from '@/features/columnPage/assets/imgs/column-2.webp';
import Thumbnail3 from '@/features/columnPage/assets/imgs/column-3.webp';
import Thumbnail4 from '@/features/columnPage/assets/imgs/column-4.webp';
import Thumbnail5 from '@/features/columnPage/assets/imgs/column-5.webp';
import Thumbnail6 from '@/features/columnPage/assets/imgs/column-6.webp';
import Thumbnail7 from '@/features/columnPage/assets/imgs/column-7.webp';
import Thumbnail8 from '@/features/columnPage/assets/imgs/column-8.webp';

const ITEMS_PER_PAGE = 8;

const THUMBNAILS = [
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  Thumbnail4,
  Thumbnail5,
  Thumbnail6,
  Thumbnail7,
  Thumbnail8,
];

export const useColumnArticles = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [articles, setArticles] = useState<ColumnArticle[]>(() => 
    Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
      id: `article-${index}`,
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tags: ['#魚料理', '#和食', '#DHA'],
      thumbnail: THUMBNAILS[index % THUMBNAILS.length],
    }))
  );

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    if (nextPage > 3) {
      setHasMore(false);
      return;
    }

    const newArticles = Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
      id: `article-${articles.length + index}`,
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tags: ['#魚料理', '#和食', '#DHA'],
      thumbnail: THUMBNAILS[(articles.length + index) % THUMBNAILS.length],
    }));

    setArticles(prev => [...prev, ...newArticles]);
    setPage(nextPage);
  }, [page, articles.length]);

  return {
    articles,
    loadMore,
    hasMore,
  };
}; 