export enum EventNames {
  pageCreated = 'pageCreated',
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
}
