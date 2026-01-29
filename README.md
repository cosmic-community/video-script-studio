# 🎬 Video Script Studio

![Video Script Studio](https://imgix.cosmicjs.com/4cec7820-fcf8-11f0-bd37-87d3468b9b4a-photo-1596484552834-6a58f850e0a1-1769680379952.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional video script management platform for content creators, featuring timeline-based script viewing with complete production notes integration. Built with Next.js 16 and Cosmic CMS.

## Features

- 🎬 **Timeline Script Viewer** - Visualize script sections with timing indicators
- 🏷️ **Category Management** - Filter scripts by category
- ⏱️ **Duration Badges** - Quick identification of video lengths
- 🎵 **Production Notes** - Music suggestions and visual notes
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark Theme** - Professional cinematic design
- 📝 **Markdown Support** - Rich text for content sections

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=697b2d456c8aeb5d6cf4d5d2&clone_repository=697b2f496c8aeb5d6cf4d764)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "HOOK (0-3 секунды):
> 
> «Вы когда-нибудь задумывались о...»
> НАСТРОЙКА (3-8 секунд):
> 
> [Широкий план переходит в средний]
> Рассказчик: "Итак, десят хива... Позвольте мне объяснить вам это."
> [Текст на экране: Главное о городе Хива]
> ОСНОВНОЙ КОНТЕНТ (8-22 секунды):
> 
> [Серия быстрых монтажных склеек, демонстрирующих концепцию]
> Рассказчик: "Вот в чём дело: бережливость важнее, чем вы думаете, потому что..."
> [Визуальное оформление: Вспомогательные видеоматериалы/графика]
> РАЗВЯЗКА (22-27 секунд):
> 
> [Крупный план реакции]
> Рассказчик: "Довольно невероятно, правда?"
> ПРИЗЫВ К ДЕЙСТВИЮ (27-30 секунд):
> 
> «Двойной тап, если согласны, и подписывайтесь, чтобы получать больше!»
> [Конечный экран: Анимированная кнопка подписки]
> Музыка: Популярные трендовые аудиозаписи"

### Code Generation Prompt

> "Based on the content model I created, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Video Scripts content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd video-script-studio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching Video Scripts
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: scripts } = await cosmic.objects
  .find({ type: 'video-scripts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Categories
```typescript
const { objects: categories } = await cosmic.objects
  .find({ type: 'script-categories' })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Single Script
```typescript
const { object: script } = await cosmic.objects
  .findOne({ type: 'video-scripts', slug: 'script-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following content types:

### Video Scripts
- **video_title** - Title of the video
- **duration** - Select dropdown (15s, 30s, 60s, 90s)
- **category** - Object relationship to Script Categories
- **hook** - Opening hook text (0-3 seconds)
- **setup** - Setup and context (3-8 seconds)
- **main_content** - Core message (Markdown)
- **resolution** - Conclusion (22-27 seconds)
- **cta** - Call to action (27-30 seconds)
- **music_suggestion** - Recommended audio
- **visual_notes** - Production notes (Markdown)
- **thumbnail** - Preview image

### Script Categories
- **name** - Category name
- **description** - Category description

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Add environment variables
4. Set build command: `bun run build`
5. Deploy

<!-- README_END -->