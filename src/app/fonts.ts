// app/fonts.ts
import { Bodoni_Moda, Inter, Kanit, Montserrat, Noto_Sans_Balinese, Poppins, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-bodoni_moda',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Correct syntax for multiple weights
});

export const fonts = {
  inter, montserrat, poppins, kanit
}