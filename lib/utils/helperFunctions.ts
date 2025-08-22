export function isRouteActive(path: string, route: string) {
  if (route === '/') return path === '/';
  return path === route || path.startsWith(`${route}/`);
}

