import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';;

import { ConfigProvider } from 'antd';

import App from './app/app';

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
            headerBg: '#424242',
            headerColor: '#ffffff',
            bodyBg: '#ffffff',
            footerBg: '#EEEEEE',
          }
        },
      }}
    >
    <App />
  </ConfigProvider>
  </StrictMode>
);
