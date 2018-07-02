/**
 * @name: [ls localStorage存储方法]
 * @author: Xiaxs(xiaxiansheng@adinnet.cn)
 * @date: 2018-03-19
 * @more: https://github.com/tsironis/lockr
 *        https://github.com/nbubna/store
 */

const LS = window.localStorage;

export default {
  getItem (key) { // 获取 localStorage
    try {
      if (typeof key === 'object') {
        return JSON.parse(LS.getItem(key));
      }
      return LS.getItem(key);
    } catch (err) {
      return null;
    }
  },
  setItem (key, val) {
    if ( typeof val === 'object' ) {
      val = JSON.stringify(val);
    }
    LS.setItem(key, val);
  },
  setKeysList (data) { // 批量保存, data是一个字典
    for ( let i in data ) {
      LS.setItem(i, data[i]);
    }
  },
  removeItem (key) {
    LS.removeItem(key);
  },
  removeList (list) { // 批量删除, list是一个数组
    list.forEach(item => {
      LS.removeItem(item);
    });
  },
  clear () {
    LS.clear();
  },
  keys () {
    return LS.keys();
  }
}