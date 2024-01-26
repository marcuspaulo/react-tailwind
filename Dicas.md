# Tailwind CSS
https://tailwindcss.com/

## Dependências do VSCode
 - PostCSS
 - TailwindCSS
 - Prettier
 - Eslint

# Dicas
Cor customizada - é possível criar uma cor ou outro elemento customizado, para isso, basta ir no arquivo `tailwind.config.ts` e definir o elemento, como por exemplo: 
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: '#8257e6'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

```
## Dica 2 Para definir o v-height
`h-screen`

## Dica 3: O Tailwind é Mobile first
Caso seja necessário adaptar o tamanho de uma div, de uma fonte, basta utilizar a responsividade do Tailwind.

## Dica 4: Um exemplo de um caracter |  no início do texto
```css
    flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex
```

## Dica 5: Valores arbitários(É bom evitar)
Solução: É melhor criar um elemento customizado no `Tailwind.config.ts`
```css
    dark:bg-[red]
    max-w-[700px]
```

Solução extend - Tailwind config
```ts
    theme: {
        extend: {
            maxWidth: {
                app: '700px'
            }
        }
    }
```

## Instalando/Configurando o Prettier e o ESlint
1. Instalar a dependência 
```sh
    pnpm i @rocketseat/eslint-config
```
2. Alterar o arquivo `.eslintrc.json`
```json
{
  "extends": [
    "@rocketseat/eslint-config/next",
    "next/core-web-vitals"
  ]
}

```
3. Instalar o plugin
```sh
    pnpm i prettier-plugin-tailwindcss -D
```
4. Crie o arquivo `prettier.config.js`
```js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```
ou no arquivo `.prettierrc.json`
```json
{
    "plugins": [
      "prettier-plugin-tailwindcss"
    ]
}
```
5. Settings do VSCode
```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
```

## Exemplo inicial 
```tsx
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl"></div>
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="mt-4 dark:text-slate-400">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>

      <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
        Sign in
      </button>
    </div>
```
Site: [Transform Tools](https://transform.tools/) - para converter o SVG em um component

## Instalando uma lib de icones
```sh
  pnpm i lucide-react
```