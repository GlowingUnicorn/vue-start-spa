export enum EventNames {
  pageCreated = 'pageCreated',
  pageUpdated = 'pageUpdated',
  navbarLinkActivated = 'navbarLinkActivated'
}

type Page = {
  text: string
  url: string
  pageTitle: string
  content: string
  published: boolean
}

export type EventPayloads = {
  [EventNames.navbarLinkActivated]: number;
  [EventNames.pageCreated]: Page;
  [EventNames.pageUpdated]: {
    index: number,
    page: Page
  };
}
