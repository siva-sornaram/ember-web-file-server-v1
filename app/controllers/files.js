import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FilesController extends Controller {
  @action
  go_back(filepathtitle) {
    console.log('backfilepath : ', filepathtitle);
    let pathArr = filepathtitle.split('/');
    console.log('patharr in go_back : ', pathArr);
    pathArr.pop();
    console.log('patharr in go_back : ', pathArr);
    let newPath = pathArr.join('/');
    console.log('newPath : ', newPath);
    return newPath;
  }
}
