import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { PermissionButtonDemo, useDemoPermission } from '../ButtonDemo'

describe('useDemoPermission usages', () => {
  it('should directly return hasPerm false', () => {
    const { result } = renderHook(() => useDemoPermission({}))

    expect(result.current.hasPerm).toBe(false)
  })

  it('should directly return hasPerm false 2', () => {
    const { result } = renderHook(() => useDemoPermission({ code: false }))

    expect(result.current.hasPerm).toBe(false)
  })

  it('should directly return hasPerm true', () => {
    const { result } = renderHook(() => useDemoPermission({ code: true }))

    expect(result.current.hasPerm).toBe(true)
  })

  it('should first loading, then return true', async () => {
    const { result } = renderHook(() => useDemoPermission({ code: 'CreateMainCampaign' }))

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.hasPerm).toBe(true)
  })

  it('should first loading, then return false', async () => {
    const { result } = renderHook(() => useDemoPermission({ code: 'DeleteMainCampaign' }))

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))

    // wrong region in this case
    expect(result.current.hasPerm).toBe(false)
  })
})

/**
 * see this doc for best practice
 * https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
 *
 * see this about queries usage
 * https://testing-library.com/docs/queries/about
 */
describe('PermissionButtonDemo usages', () => {
  it('should directly render null', () => {
    const { container } = render(<PermissionButtonDemo permission={false} />)

    // will be a div container to wrap null
    expect(container).toMatchInlineSnapshot(`<div />`)
  })

  it('should directly render Button', () => {
    render(<PermissionButtonDemo permission={true} />)

    expect(screen.getByRole('button', { name: 'Button with Permission' })).toBeInTheDocument()
  })

  it('should first loading, then render Button', async () => {
    render(<PermissionButtonDemo permission="EditMainCampaign" />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    // use findBy*, it will wait until the component is found
    const buttonEl = await screen.findByRole('button', { name: 'Button with Permission' })
    // will auto generate and find snapshot
    expect(buttonEl).toMatchSnapshot()
  })

  it('should show modal text after clicking', async () => {
    render(<PermissionButtonDemo className="btn-flag" permission="EditMainCampaign" />)

    const buttonEl = await screen.findByRole('button', { name: 'Button with Permission' })

    expect(screen.queryByText(/Modal/i)).not.toBeInTheDocument()
    fireEvent.click(buttonEl)
    expect(screen.getByText(/Modal/i)).toBeInTheDocument()
  })
})
