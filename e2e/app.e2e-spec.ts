import { GiganticLfgPage } from './app.po';

describe('gigantic-lfg App', () => {
  let page: GiganticLfgPage;

  beforeEach(() => {
    page = new GiganticLfgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
