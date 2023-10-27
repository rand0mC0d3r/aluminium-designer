import { lazy } from 'react'

const Editor = lazy(() => import('./views/Editor'))
const Preview = lazy(() => import('./views/Preview'))
const Designer = lazy(() => import('./views/Designer'))

export default [
  {
    label: 'Designer',
    path: '/',
    component: <Designer />,
    exact: true,
    public: true,
  }, {
    label: 'Editor',
    path: '/editor/:id',
    component: <Editor />,
    exact: true
  }, {
    label: 'Preview',
    path: '/preview/:id',
    component: <Preview />,
    exact: true
  }
]
