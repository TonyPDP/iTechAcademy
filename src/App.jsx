import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppRoutes from "./AppRouter";
import { antdTheme } from './utils/theme';

const App = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
};

export default App;