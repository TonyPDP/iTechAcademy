import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppRoutes from "./AppRouter"; // assuming that's the correct path
import { antdTheme } from "./utils/theme";

const App = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <AppRoutes /> {/* 👈 Only this handles routing now */}
      </Router>
    </ConfigProvider>
  );
};

export default App;
