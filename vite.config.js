import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,       // تحديد المنفذ 5174
    strictPort: true,  // يمنع اختيار منفذ آخر تلقائياً
    host: '0.0.0.0',  // (اختياري) للوصول من أجهزة أخرى في الشبكة
  }
})