/* eslint-disable import/no-default-export */
import { ReactNode, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { HomePage } from '@pages/Home'
import { LoginPage } from '@pages/Login'
import { NoMatchPage } from '@pages/NoMatch'
import { NoPermissionPage } from '@pages/NoPermission'
import { Layout } from 'antd'

import { Loading, ProductCampaignDetailPage, ProductCampaignListPage } from './routes.config'

const { Header, Sider, Content } = Layout

import './App.css'

function AppLayout(): ReactNode {
  return (
    <Layout className="App">
      <Header>Campaign Template</Header>
      <Layout>
        <Sider width="25%">Menus</Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  )
}

function App(): ReactNode {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<HomePage />} />

        <Route
          path="campaign/product/list"
          element={
            <Suspense fallback={<Loading />}>
              <ProductCampaignListPage />
            </Suspense>
          }
        />
        <Route
          path="campaign/product/detail"
          element={
            <Suspense fallback={<Loading />}>
              <ProductCampaignDetailPage />
            </Suspense>
          }
        />

        <Route path="401" element={<NoPermissionPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}

export default App
