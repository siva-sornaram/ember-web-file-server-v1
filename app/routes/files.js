import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed, set } from '@ember/object';

export default class FilesRoute extends Route {
  @service router;
  @service session;

  @tracked files;

  @tracked filepathtitle;

  model(params) {
    console.log('params : ', params);
    console.log('history : ', window.history);

    class file {
      constructor(filePath) {
        set(this, 'filePathTitle', filePath);
      }

      @computed('filePathTitle')
      get filePath() {
        console.log('get filepath in class : ', this.filePathTitle);
        return this.filePathTitle;
      }

      set filePath(path) {
        let pathArr = path.split('/');
        console.log('set filepath in class : ', pathArr);
      }
    }

    let File = new file(params.path);
    this.filepathtitle = File.filePath;
    console.log('File.filepath : ', File.filePath);
    console.log('filepathtitle from file class : ', this.filepathtitle);

    if (params.path == undefined || params.path == '') {
      this.files = fetch('http://localhost:8081/getfiles/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    } else {
      this.files = fetch('http://localhost:8081/getfiles/' + params.path)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    }
    console.log(this.files);
    return this.files;
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    if (this.filepathtitle !== undefined) {
      controller.set('filepathtitle', this.filepathtitle);
      console.log('controller filepath : ', this.filepathtitle);
    } 
    // else {
    //   controller.set('filepathtitle', '/');
    //   console.log('controller filepath : ', this.filepathtitle);
    // }
  }
}
