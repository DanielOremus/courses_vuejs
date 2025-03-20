export default Object.freeze({
  apiBase: `${import.meta.env.VITE_APP_API_BASE}`,
  apiUri: `${import.meta.env.VITE_APP_API_BASE}/${
    import.meta.env.VITE_APP_API_VERSION
  }`,
})
