# Description - Weather Application
Use Vite, React 18 (TypeScript based), tailwind CSS to build this application

- Use nvm for node version control, node -v 18.19.0
- Use jest as the Unit test framework(configration is ready, `npm run test` to be tested, and a simple test case, snapshot created).
- Use the `OpenWeather` API

- Feature:
  1. Current location weather information display
  2. Next hours (40+ hrs) weather information display within sliding window
  3. Next 5 days weather information display as list
  4. Search functio by seaching the Country name, State, City
  5. Whole weather application will update with choose the searching results

Screenshots:
lg screen:
![image](https://github.com/user-attachments/assets/d33eb7ef-0f50-4e7e-ab65-410e77848bcc)
sm screen:
![image](https://github.com/user-attachments/assets/784f7e8e-5b1f-4c9c-8f09-87f68fbabd33)




## How to launch the Weather Application

- Steps:
1. Add new `.env` file, copy the content from `.env.example` file.
Replace the `VITE_API_KEY` with  `482944e26d320a80bd5e4f23b3de7d1f`
2. Run `npm i` to intall the dependencies.
3. Run `npm run dev` to launch the localhost.
   
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

