import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Путь к корневой директории вашего проекта
  // Настройки для сборки проекта
  build: {
    // Путь, куда будет складываться собранный проект
    outDir: path.resolve(__dirname, 'dist'),

    // Настройки для Rollup (сборщика, используемого в Vite)
    rollupOptions: {
      // Точки входа для разных страниц вашего MPA
      input: {
        main: path.resolve('index.html'),
        maps: path.resolve('src/html/maps.html'),
        // Добавьте другие страницы здесь
      },
    },
  },
  historyApiFallback: {
    rewrites: [
      { from: /\/maps/, to: '/maps.html' },
      // Добавьте другие правила перенаправления здесь
    ],
  },
});