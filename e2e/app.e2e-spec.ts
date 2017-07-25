import { HalepenoPage } from './app.po';

describe('halepeno App', () => {
  let page: HalepenoPage;

  beforeEach(() => {
    page = new HalepenoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
