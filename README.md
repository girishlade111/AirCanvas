# AirCanvas

A modern, full-stack Next.js application built with cutting-edge technologies for building scalable web applications.

## 🚀 Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router and Server Components
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI
- **Radix UI Primitives** - Unstyled, accessible components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### State Management & Data Fetching
- **TanStack Query (React Query)** - Server state management
- **Zustand** - Lightweight client state management
- **React Hook Form** - Performant forms with validation
- **Zod** - Schema validation

### Database & ORM
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Production database (via Prisma)

### Authentication
- **NextAuth.js** - Authentication for Next.js

### Internationalization
- **next-intl** - Internationalization for Next.js

### Development Tools
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
AirCanvas/
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Auth-related pages
│   │   └── (dashboard)/  # Protected dashboard pages
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (shadcn/ui)
│   │   └── ...          # Feature components
│   ├── lib/             # Utility functions and configs
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── eslint.config.mjs     # ESLint configuration
```

## 🛠️ Getting Started

### Prerequisites
- **Bun** (recommended) or Node.js 20+
- **PostgreSQL** database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/girishlade111/AirCanvas.git
cd AirCanvas
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database URL and other secrets
```

4. Set up the database:
```bash
bun run db:generate
bun run db:push
```

5. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with logging |
| `bun run build` | Build for production (standalone output) |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push schema changes to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run db:migrate` | Run database migrations |
| `bun run db:reset` | Reset database (⚠️ destructive) |

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/aircanvas?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

### Database Schema

The Prisma schema is located at `prisma/schema.prisma`. Run migrations after schema changes:

```bash
bun run db:migrate
```

## 🎨 UI Components

This project uses **shadcn/ui** components built on top of **Radix UI** primitives. All components are in `src/components/ui/` and can be customized.

### Adding New Components

```bash
# Using shadcn/ui CLI (if configured)
npx shadcn@latest add [component-name]
```

## 🌐 Internationalization

The project uses **next-intl** for i18n support. Translation files are located in `src/messages/`.

### Supported Locales
- English (en) - Default
- Add more locales in `src/i18n/request.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker

```dockerfile
# Build stage
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Production stage
FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", "server.js"]
```

### Standalone Output

The build script creates a standalone output in `.next/standalone/` for minimal production deployments.

## 📦 Key Features

- ✅ **Type-safe** - Full TypeScript coverage
- ✅ **Accessible** - Radix UI primitives ensure WCAG compliance
- ✅ **Performant** - Next.js 16 with React 19 concurrent features
- ✅ **Scalable** - Modular architecture with clear separation of concerns
- ✅ **Developer Experience** - Hot reload, TypeScript, ESLint, Prisma Studio
- ✅ **Internationalization** - Built-in i18n support
- ✅ **Authentication** - Ready-to-use auth with NextAuth.js
- ✅ **Database** - Type-safe database access with Prisma

## 🧪 Testing

```bash
# Run tests (when configured)
bun test
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Prisma](https://www.prisma.io/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Girish Lade**
- GitHub: [@girishlade111](https://github.com/girishlade111)

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui