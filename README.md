# ByteSpace

Landing page for an online course platform, built from the ByteSpace Figma design.
Also includes the Login and Sign Up pages.

## Tech

- React + Vite
- Tailwind CSS v4
- React Router

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Pages

- `/` – landing page
- `/login` – sign in
- `/register` – sign up

## Folder structure

```
src/
  components/   shared pieces (Navbar, Footer, CourseCard, ...)
  sections/     landing page sections in page order
  pages/        Home, Login, Register
  assets/       images exported from the design
  data.js       course, category, testimonial and footer data
```
