// should NOT export anything

import 'react'
declare module 'join-path' {
  export default function join(...args: (string | undefined)[]): string
}

declare module 'browser-md5-file'

// declare module 'react' {
//   interface ReactElement {
//     isRootInsert: boolean;
//     isComment: boolean;
//   }
// }
