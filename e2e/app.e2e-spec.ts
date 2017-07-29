import { MySpreadsheetPage } from './app.po';

describe('my-spreadsheet App', () => {
  let page: MySpreadsheetPage;

  beforeEach(() => {
    page = new MySpreadsheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
