import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GetfilesallFilesController extends Controller {
  @tracked filepathtitle;

  constructor() {
    super(...arguments);

    function getURL() {
      var prevPathArr = window.location.pathname.split('/');
      console.log('prevpatharr : ', prevPathArr);
      var prevPath = prevPathArr.splice(2, prevPathArr.length).join('/');
      console.log('prevpath : ', prevPath);
      return prevPath;
    }

    this.filepathtitle = getURL();

    $(window).on('popstate', function (e) {
      this.filepathtitle = getURL();
    });

    console.log('upload js constructor filepath : ', this.filepathtitle);
  }

  @action
  save_filepath(filePathName) {
    console.log('before save : ', this.filepathtitle);
    this.filepathtitle = filePathName;
    console.log('after save : ', this.filepathtitle);
    console.log('upload js action filepath : ', this.filepathtitle);
  }

  @action
  go_back() {
    window.history.back();
  }
}
