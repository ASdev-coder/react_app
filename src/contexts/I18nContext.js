//internationalization

import { createContext } from 'react';

const I18nContext = createContext({
  locale: 'en',
  setLocale: () => {},
  messages: {},
  setMessages: () => {},
});

export default I18nContext;