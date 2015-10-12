import quoteReducer from './quote/quoteReducer';
import themeReducer from './theme/themeReducer';

export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}
