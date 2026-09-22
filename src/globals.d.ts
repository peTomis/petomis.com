declare module "*.css" {
  const content: Record<string, string>
  export default content
}

// `inert` landed in the HTML spec and in every evergreen browser, but the
// pinned @types/react version predates it in JSX.IntrinsicElements.
// eslint-disable-next-line unused-imports/no-unused-vars
declare namespace React {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface HTMLAttributes<T> {
    inert?: boolean
  }
}
