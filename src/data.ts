import { Page, Pages } from '@/types/data';

const pagesKey = 'pages';

const pageJson = localStorage.getItem(pagesKey) || '';
const pageStore: Pages = JSON.parse(pageJson);

const pageActions = {
  getAllPages() {
    return pageStore;
  },

  getSinglePage(index: number) {
    return pageStore[index];
  },

  editPage(index: number, page: Page) {
    pageStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pageStore));
  },
};

export type PageActions = typeof pageActions

export default pageActions;
