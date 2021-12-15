import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @tracked filepath;

  getFilePath() {
    return this.filepath;
  }

  setFilePath(filePath) {
    this.filepath = filePath;
  }
}
