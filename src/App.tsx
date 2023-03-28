import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  //how to Property 'Children' is missing in type '{ children: Element; }' but required in type?

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

