import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class GetfilesallFileRoute extends Route {

    @service router;
  @service session;

  @tracked files;

  @tracked filepath;

  model(params) {
    console.log('params : ', params);

    localStorage.setItem('filepath', params.path);

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

    this.controllerFor('application').set(
      'filepathcon',
      localStorage.getItem('filepath')
    );
  }

}
