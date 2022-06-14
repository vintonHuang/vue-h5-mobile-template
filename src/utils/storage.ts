/*
 * @Author: Vinton
 * @Date: 2022-05-17 15:09:46
 * @Description: file content
 */
// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

/**
 * 创建本地缓存对象
 * @param {string=} prefixKey -
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export const createStorage = ({ prefixKey = '', storage = localStorage } = {}) => {
  /**
   * 本地缓存类
   * @class Storage
   */
  const Storage = class {
    _storage = storage;
    _prefixKey = prefixKey;

    _getKey(key: string) {
      return `${this._prefixKey}${key}`.toUpperCase();
    }

    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire
     */
    set(key: string, value: any, expire = DEFAULT_CACHE_TIME) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      });
      this._storage.setItem(this._getKey(key), stringData);
    }

    /**
     * 读取缓存
     * @param {string} key 缓存键
     * @param {*=} def 默认值
     */
    get(key: string, def?: any) {
      const item = this._storage.getItem(this._getKey(key));
      if (item) {
        try {
          const data = JSON.parse(item);
          const { value, expire } = data;
          // 在有效期内直接返回
          if (expire === null || expire >= Date.now()) {
            return value;
          }
          this.remove(this._getKey(key));
        } catch (e) {
          return def;
        }
      }
      return def;
    }

    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string) {
      this._storage.removeItem(this._getKey(key));
    }

    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear() {
      this._storage.clear();
    }
  };
  return new Storage();
};

export const storage = createStorage();

export default storage;
