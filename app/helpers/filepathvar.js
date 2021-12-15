import { helper } from '@ember/component/helper';

export default helper(function filepathvar(/*, named*/) {
  return localStorage.getItem('filepath');
});
