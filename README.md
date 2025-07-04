# 🚀 Launchium - Launch a Token With a Tweet

Revolutionary AI-powered platform that transforms ideas into tradeable tokens instantly. Launch your token in 0-60 seconds with no coding required.

![Launchium Logo](./public/logo.jpg)

## ✨ Features

- 🤖 **AI-Powered**: GPT-4 powered smart contract generation
- ⚡ **Ultra Fast**: 0-60 second token deployment
- 🔒 **Secure**: Built-in security audits and best practices
- 🌐 **Cross-Chain**: Solana integration with more chains coming
- 📱 **Responsive**: Beautiful UI that works on all devices
- 🎨 **Modern Design**: Gradient animations and smooth transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/launchium.git
cd launchium

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

## 📦 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/launchium)

### Manual Deployment

1. **Fork this repository**

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Set environment variables from `.env.example`

3. **Deploy**: Vercel will automatically build and deploy your site

### Build Locally

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🎨 Customization

### Logo

Replace `/public/logo.jpg` with your own logo image.

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: "#ffd166", // Yellow
  // ... other shades
},
secondary: {
  DEFAULT: "#ffb000", // Orange
},
accent: {
  DEFAULT: "#ff8400", // Dark Orange
}
```

### Content

Update content in individual component files:
- Hero text: `components/HeroSection.tsx`
- Roadmap phases: `components/Roadmap.tsx`
- Token metrics: `components/TokenEconomics.tsx`
- Presale info: `components/CTA.tsx`

### Fonts

Fonts are configured in `app/layout.tsx` using Google Fonts:
- **Body**: Inter
- **Headings**: Sora

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large**: 1280px+

## 🔧 Environment Variables

Create a `.env.local` file (see `.env.example`):

```bash
NEXT_PUBLIC_SITE_URL=https://launchium.io
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The app is optimized for serverless deployment on platforms like:
- Netlify
- Railway
- Digital Ocean App Platform

```bash
# Build
npm run build

# The build output will be in `.next/`
```

## 📊 Performance

- **Lighthouse Performance**: ≥95
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔒 Security

- Secure headers configured in `vercel.json`
- XSS protection enabled
- Content Security Policy
- Image optimization

## 🎯 Presale Information

- **Dates**: July 4-9, 2024
- **Hard Cap**: $250,000
- **Token Price**: $0.005
- **Real-time Countdown**: Automated timer to presale start

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Email**: hello@launchium.io
- **Twitter**: [@launchium](https://twitter.com/launchium)
- **Discord**: [Join our community](https://discord.gg/launchium)

---

**Built with ❤️ for the crypto community**# Test commit to trigger Vercel deployment
