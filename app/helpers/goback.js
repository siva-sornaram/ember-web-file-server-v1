import { helper } from '@ember/component/helper';

export default helper(function goback(filepathtitle /*, named*/) {
  // return positional;
  var oldFilePath = JSON.parse(JSON.stringify(filepathtitle))[0];
  if (oldFilePath !== null && oldFilePath !== '') {
    console.log('backfilepath : ', oldFilePath);
    let pathArr = oldFilePath.split('/');
    console.log('patharr in go_back : ', pathArr);
    pathArr.pop();
    console.log('patharr in go_back : ', pathArr);
    if (pathArr <= 0) {
      return '/';
    } else {
      let newPath = pathArr.join('/');
      console.log('newPath : ', newPath);
      return newPath;
    }
  }
  return '/';
});
