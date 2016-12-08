import { GiftubePage } from './app.po';

describe('giftube App', function() {
  let page: GiftubePage;

  beforeEach(() => {
    page = new GiftubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
