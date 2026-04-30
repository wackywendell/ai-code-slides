import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'text-lead': 'text-[1.5rem] text-slate-300 !leading-[1.4]',
    'text-section-sub': 'text-xl !text-slate-200',
    'text-aside': 'text-sm text-slate-500 italic',
    'prompt-quote': 'border-l-4 border-sky-500 bg-slate-800/50 pl-6 pr-4 py-3 italic text-slate-300',
  },
})
