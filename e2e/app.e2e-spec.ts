import { Angular.KendouiPage } from './app.po';

describe('angular.kendoui App', () => {
  let page: Angular.KendouiPage;

  beforeEach(() => {
    page = new Angular.KendouiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
