import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class FilesController extends Controller {

  @service notifications;
  @service router;

  constructor() {
    super(...arguments);
  }
}
