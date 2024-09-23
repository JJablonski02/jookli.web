import createMiddleware from 'next-intl/middleware';
import SUPPORTED_LOCALES from './supported-locales';
import { localePrefix } from './config';

//Middleware dostarczający konfigurację dla i18n

export default createMiddleware({

  locales: SUPPORTED_LOCALES,
  localePrefix: localePrefix,
  defaultLocale: 'en'
});
 
export const config = {

  matcher: [
    '/',
    '/:lang(en|es|de|fr|it|nl|dk|swe|pl|pt|ro|vn|tr|id|ru|uk|pk|sa|hi|ta|si|fa|ph|bd|kh|th|jp|chs|cht|kr)/:path*',
    '/how-it-works',
    '/earn-methods',
    '/support',
    '/register',
    '/sign-in',
    '/about-us',
    '/blog',
    '/affilate',
    '/resources',
    '/policy-privacy',
    '/terms',
    '/copyright',
    '/cookie-policy',
    '/adveristment-rules',
    '/verify-email'
  ]
};
