import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed, set } from '@ember/object';
import { action } from '@ember/object';

export default class FilesRoute extends Route {
  @service router;
  @service session;
  @service notifications;


  @tracked files;

  @tracked filepathtitle = '/';

  model(params) {
    console.log('params : ', params);
    // console.log('params.path : ', params.path );
    // console.log('history : ', window.history);

    class file {
      constructor(filePath = '/') {
        set(this, 'filePathTitle', filePath);
      }

      @computed('filePathTitle')
      get filePath() {
        // console.log('get filepath in class : ', this.filePathTitle);
        return this.filePathTitle;
      }

      set filePath(path) {
        let pathArr = path.split('/');
        // console.log('set filepath in class : ', pathArr);
      }
    }

    let File = new file(params.path);
    this.filepathtitle = File.filePath;
    this.filepathtitle.split('//').join('/');
    // console.log('File.filepath : ', File.filePath);
    // console.log('filepathtitle from file class : ', this.filepathtitle);

    if (params.path == undefined || params.path == '') {
      this.files = fetch('/getfiles')
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          return data;
        });
    } else if (params.path == '/') {
        // console.log('in else if : ', params.path);
        this.files = fetch('/getfiles')
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          return data;
        });
    } else {
      this.files = fetch('/getfiles/' + params.path)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          return data;
        });
    }
    // console.log(this.files);
    return this.files;
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    window.scrollTo(0,0);

    if (this.filepathtitle !== undefined) {
      controller.set('filepathtitle', this.filepathtitle);
      controller.set('filepathdisplay', this.filepathtitle.replace('#', '/'));
    //   console.log('controller filepath : ', this.filepathtitle);
    } 
    else {
    //   controller.set('filepathtitle', '/');
    //   console.log('controller filepath : ', this.filepathtitle);
    }
  }

  @action
  create_folder() {
    var folname = foldername.value;
    var relPath = this.filepathtitle;

    if (relPath == '' || relPath == '/') {
        relPath = 'root';
    }

    if (relPath == '#') relPath = 'root';

    // console.log('folname : ', folname, 'relpath : ', relPath);

    var result = $.ajax({
      type: 'POST',
      url: '/createfolder/',
      data: {
        foldername: folname,
        relpath: relPath,
      },
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    const rsObj = JSON.parse(result);

    // console.log('rsObj in create_folder : ', rsObj);

    if (rsObj.status == 'success') {
        this.refresh();
      this.notifications.success('Folder has been created successfully', {
        autoClear: true,
        clearDuration: 3000
      });
    }
    if (rsObj.status == 'already-present') {
      this.notifications.info('Folder is already present', {
        autoClear: true,
        clearDuration: 3000
      });
    }
  }

  @action
  upload_files() {
    var fileObj = $('input[name="file"]').get(0).files;
    var relPath = this.filepathtitle;
    var rsObj = '';

    var formData = new FormData();
    console.log('fileObj : ', fileObj, 'type : ', typeof(fileObj), 'relPath : ', relPath);

    
    Object.keys(fileObj).forEach(key => {
      formData.append('file', fileObj[key]);
    });
    formData.append('relpath', relPath);

    for (var key of formData.entries()) {
      console.log(key[0], ', ', key[1]);
    }
    
    console.log('formdata : ', formData);

    var result = $.ajax({
      type: 'POST',
      url: '/uploadfiles/',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      async: false,
      global: false,
      success: function (dat) {
        console.log('dat : ', dat);
        rsObj = dat;
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    console.log('rsObj : ', rsObj);
    if (rsObj.status == 'success') {
      this.refresh();
      this.notifications.success('Files have been uploaded successfully', {
        autoClear: true,
        clearDuration: 3000
      });
    } else if (rsObj.status == 'empty') {
      this.refresh();
      this.notifications.error('Files List cannot be empty', {
        autoClear: true,
        clearDuration: 3000
      });
    } else {
      this.refresh();
      this.notifications.error('Files have not been uploaded', {
        autoClear: true,
        clearDuration: 3000
      });
    }
  }
}
