// should NOT export anything

import 'react'

// declare css/scss modules
// declare module '*.module.css'
// declare module '*.module.scss'
// declare module '*.css'
// declare module '*.scss'

// declare module '*.png'
// declare module '*.jpg'
// declare module '*.jpeg'
// declare module '*.svg'

declare module 'join-path' {
  export default function join(...args: (string | undefined)[]): string
}

declare module 'browser-md5-file'

// declare module '*.scss' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }

// declare module 'react' {
//   interface ReactElement {
//     isRootInsert: boolean;
//     isComment: boolean;
//   }
// }
