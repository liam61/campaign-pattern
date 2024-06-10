/* eslint-disable import/no-default-export */
import { ReactNode, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { HomePage } from '@pages/Home'
import { LoginPage } from '@pages/Login'
import { NoMatchPage } from '@pages/NoMatch'
import { NoPermissionPage } from '@pages/NoPermission'

import { Loading, ProductCampaignDetailPage, ProductCampaignListPage } from './routes.config'

import './App.css'

function Layout(): ReactNode {
  return (
    <div className="App">
      <header>Campaign Template</header>

      <main>
        <aside>Menus</aside>

        <section className="ct-section">
          <Outlet />
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

function App(): ReactNode {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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

        <Route path="noPermission" element={<NoPermissionPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}

export default App
