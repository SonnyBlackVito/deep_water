import localFont from 'next/font/local'

// import { FILE } from '../../public/fonts/SVN/SVN-GilroyRegular.otf'

export const svnFont = localFont({
  src: [
    {
      path: '../../public/fonts/SVN/SVN-GilroyRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN/SVN-GilroyMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN/SVN-GilroyBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-svn',
  display: 'swap',
  preload: true,
})