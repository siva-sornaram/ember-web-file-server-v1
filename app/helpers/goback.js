import { helper } from '@ember/component/helper';

export default helper(function goback(filepathtitle /*, named*/) {
  // return positional;
  var oldFilePath = JSON.parse(JSON.stringify(filepathtitle))[0];
  if (oldFilePath != '/') {
    // console.log('backfilepath : ', oldFilePath);
    let pathArr = oldFilePath.split('/');
    // console.log('patharr in go_back : ', pathArr);
    pathArr.pop();
    // console.log('patharr in go_back : ', pathArr);
      let newPath = pathArr.join('/');
      newPath.replaceAll('//', '/');
      // console.log('newPath : ', newPath);
      return (newPath == '') ? '#' : newPath ;
  } 
});
