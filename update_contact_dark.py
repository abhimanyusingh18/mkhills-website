import re

with open("src/app/contact/page.tsx", "r") as f:
    text = f.read()

# Make background dark mode adaptable
text = text.replace('className="min-h-screen flex flex-col"', 'className="min-h-screen flex flex-col bg-white dark:bg-zinc-950"')
text = text.replace('className="flex-1 bg-zinc-50 pt-32 pb-24 relative overflow-hidden"', 'className="flex-1 bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24 relative overflow-hidden transition-colors"')

# Top headings
text = text.replace('bg-white px-4 py-1.5 rounded-full shadow-sm border border-black/5', 'bg-white dark:bg-zinc-900 px-4 py-1.5 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800 text-accent font-semibold')
text = text.replace('font-heading font-bold text-zinc-900 leading-[1.1]', 'font-heading font-bold text-zinc-900 dark:text-white leading-[1.1]')
text = text.replace('text-zinc-600 font-light', 'text-zinc-600 dark:text-zinc-400 font-light')
text = text.replace('text-zinc-900">MK Hills Food', 'text-zinc-900 dark:text-white">MK Hills Food')

# HQ Card
text = text.replace('bg-white rounded-3xl p-8 shadow-sm border border-zinc-200', 'bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800')
text = text.replace('bg-red-50 p-3.5', 'bg-red-50 dark:bg-red-500/10 p-3.5')
text = text.replace('text-red-600"', 'text-red-600 dark:text-red-400"')
text = text.replace('text-zinc-900">Locations', 'text-zinc-900 dark:text-white">Locations')
text = text.replace('text-zinc-500 uppercase tracking-wider', 'text-zinc-500 dark:text-zinc-400 uppercase tracking-wider')

text = text.replace('text-zinc-900 mb-2 flex', 'text-zinc-900 dark:text-white mb-2 flex')
text = text.replace('text-zinc-600 leading-relaxed text-sm', 'text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm')
text = text.replace('border-t border-zinc-100 mt-2', 'border-t border-zinc-100 dark:border-zinc-800 mt-2')

# Direct Contacts Card
text = text.replace('bg-emerald-50 p-3 rounded-xl', 'bg-emerald-50 dark:bg-emerald-500/10 p-3 rounded-xl')
text = text.replace('text-emerald-600"', 'text-emerald-600 dark:text-emerald-400"')
text = text.replace('text-zinc-900">Direct Contact', 'text-zinc-900 dark:text-white">Direct Contact')
text = text.replace('pb-4 border-b border-zinc-100', 'pb-4 border-b border-zinc-100 dark:border-zinc-800')
text = text.replace('text-zinc-900">Mohit Bansal', 'text-zinc-900 dark:text-white">Mohit Bansal')
text = text.replace('text-zinc-900">Anil Bansal', 'text-zinc-900 dark:text-white">Anil Bansal')

# Contact Form
text = text.replace('bg-white rounded-3xl p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100', 'bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800')
text = text.replace('text-zinc-900">Send an Inquiry', 'text-zinc-900 dark:text-white">Send an Inquiry')
text = text.replace('text-zinc-500 mb-8', 'text-zinc-500 dark:text-zinc-400 mb-8')

# Form Inputs
text = text.replace('text-zinc-500 ml-1', 'text-zinc-500 dark:text-zinc-400 ml-1')
text = text.replace('bg-zinc-50 border border-zinc-200', 'bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800')
text = text.replace('bg-zinc-50 border ${', 'bg-zinc-50 dark:bg-zinc-950 border ${')
text = text.replace('bg-zinc-50 border ${mobileError', 'bg-zinc-50 dark:bg-zinc-950 border ${mobileError')
text = text.replace('bg-zinc-50 border ${emailError', 'bg-zinc-50 dark:bg-zinc-950 border ${emailError')
text = text.replace(': "border-zinc-200 focus:border-accent', ': "border-zinc-200 dark:border-zinc-800 focus:border-accent')
text = text.replace('text-zinc-900 focus:outline', 'text-zinc-900 dark:text-white focus:outline')
text = text.replace('placeholder:text-zinc-400', 'placeholder:text-zinc-400 dark:placeholder-zinc-600')

with open("src/app/contact/page.tsx", "w") as f:
    f.write(text)
print("Updated successfully")
