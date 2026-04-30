import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      caveat: ['Caveat', 'cursive'],
    },
  },
  shortcuts: {
    'text-lead': 'text-[1.5rem] text-slate-300 !leading-[1.4]',
    'text-section-sub': 'text-xl !text-slate-200',
    'text-aside': 'text-sm text-slate-500 italic',
    'font-handwritten': 'font-caveat tracking-[0.01em]',

    // Speech bubble: shared structural base + speaker-specific typography.
    // Prompt is human-voice (italic prose); Claude is machine-voice (mono, denser).
    'speech-bubble': 'border-l-4 bg-slate-800/50 pl-6 pr-4 text-slate-300',
    'prompt-quote': 'speech-bubble border-sky-500 italic py-3',
    'claude-quote': 'speech-bubble border-orange-500 font-mono text-sm py-2 leading-snug',

    'speaker-label': 'text-xs uppercase font-mono tracking-widest',

    // AI palette — disposable / make-it-work
    'ai-accent': 'text-orange-400',
    'ai-bg': 'bg-orange-500/10',
    'ai-border': 'border-orange-500/40',

    // Engineering palette — durable / make-it-good
    'eng-accent': 'text-sky-400',
    'eng-bg': 'bg-sky-500/10',
    'eng-border': 'border-sky-500/40',
  },
})
