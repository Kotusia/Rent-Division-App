import { RentAppPage } from './app.po';

describe('rent-app App', function() {
  let page: RentAppPage;

  beforeEach(() => {
    page = new RentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
