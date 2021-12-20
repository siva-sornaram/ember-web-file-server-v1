import { helper } from '@ember/component/helper';

export default helper(function isfilepath(filepathtitle /*, named*/) {
  // return positional;
  if (!(filepathtitle !== undefined && filepathtitle !== '' && filepathtitle !== '/')) {
    return false;
  }
  return true;
});
