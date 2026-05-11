// custom.d.ts
// создан для фикса ошибки в layout.tsx (Не удается найти объявления модуля или типа для импорта с побочным эффектом "./globals.css".)
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}