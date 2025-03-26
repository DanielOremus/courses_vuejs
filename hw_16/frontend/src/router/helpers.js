import { useAuthStore } from "@/stores/auth"

export const isAuthenticated = () => useAuthStore().isAuthenticated

export const isRouteAvailable = (routeItem) => {
  const { userPermissions } = useAuthStore()

  return (
    !routeItem.meta?.requiresAuth ||
    (routeItem.meta?.hasAccess && routeItem.meta?.hasAccess(userPermissions)) ||
    (!routeItem.meta?.hasAccess && isAuthenticated)
  )
}
