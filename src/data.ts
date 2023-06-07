import { Pages } from '@/types/data';

const pagesKey = 'pages';

const pageJson = localStorage.getItem(pagesKey) || '';
const pageStore: Pages = JSON.parse(pageJson);

export default {
  getAllPages() {
    return pageStore;
  },

  getSinglePage(index: number) {
    return pageStore[index];
  },
};
