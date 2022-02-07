import '../src/tailwind.css';
import '../src/index.less';
import '../src/ant.css';
import theme from '!!raw-loader!../src/styles/theme.less';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  customizeAntdTheme: {
    modifyVars: theme ,
  }
}