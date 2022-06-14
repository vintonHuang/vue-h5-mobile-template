/*
 * @Author: Vinton
 * @Date: 2022-06-14 15:12:34
 * @Description: file content
 */
/**
 * @name ConfigCompressPlugin
 * @description 开启.gz压缩
 */
import viteCompression from 'vite-plugin-compression';

export const ConfigCompressPlugin = () => {
  return viteCompression({
    ext: '.gz',
    verbose: true,
    deleteOriginFile: false,
  });
};
