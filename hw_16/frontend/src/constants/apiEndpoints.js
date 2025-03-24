export default Object.freeze({
  products: {
    fetchByQuery: `/products`,
    fetchById: (id) => `/products/${id}`,
    create: `/products`,
    updateById: (id) => `/products/${id}`,
    deleteById: `/products`,
  },
  categories: {
    fetchAll: `/categories`,
  },
  users: {
    fetchOwnProfileData: `/users/profile`,
  },
  auth: {
    login: `/auth/login`,
    register: `/auth/register`,
  },
})
