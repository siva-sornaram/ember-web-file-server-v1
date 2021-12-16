import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GetfilesallFileRoute extends Route {
  @service router;
  @service session;

  @tracked files;

  model(params) {
    console.log('params : ', params);

    // localStorage.setItem('filepath', params.path);

    if (params.path == undefined || params.path == '') {
      this.files = fetch('/getfiles/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    } else {
      this.files = fetch('/getfiles/' + params.path)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    }
    console.log(this.files);
    return this.files;
  }
}
