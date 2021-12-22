import { helper } from '@ember/component/helper';

export default helper(function isfilepath(filepathtitle /*, named*/) {
  // return positional;
  var filepath = JSON.parse(JSON.stringify(filepathtitle))[0];
  console.log('filepath in isfilepath helper : ', filepath);
  if ((filepath == undefined || filepath == '' || filepath == '/')) {
    return false;
  }
  return true;
});
