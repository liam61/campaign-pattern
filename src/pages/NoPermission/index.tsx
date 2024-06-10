import { redirect } from 'react-router-dom'

import { useMount } from 'ahooks'

export function NoPermissionPage(): JSX.Element {
  useMount(() => {
    setTimeout(() => {
      const redirectUrl = window.location.href

      redirect(`/login?redirectUrl=${encodeURIComponent(redirectUrl)}`)
    }, 1000)
  })

  return (
    <div>
      <h2>No Permission to see here!</h2>
      <p>Redirecting...</p>
    </div>
  )
}
