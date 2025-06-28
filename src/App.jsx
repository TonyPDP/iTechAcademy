import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { antdTheme } from "./utils/theme";
import AppRoutes from "./AppRouter";

const App = () => {
  return (
    <Router>
      <ConfigProvider theme={antdTheme}>
        <AppRoutes />
      </ConfigProvider>
    </Router>
  );
};

export default App;
