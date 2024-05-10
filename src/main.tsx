import App from './app/app';
import { StrictMode } from 'react';
import { ConfigProvider } from 'antd';
import * as ReactDOM from 'react-dom/client';;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: '#EEEEEE',
            headerBg: '#090C0E',
            headerColor: '#ffffff',
            bodyBg: '#ffffff',
            footerBg: '#EEEEEE',
            triggerColor: '#000',
          }
        },
      }}
    >
    <App />
  </ConfigProvider>
  </StrictMode>
);
