export function getUserIdFromRequestHeaders(headers: Headers): string {
  // Demo only: expect 'x-user-id' header set by the app after login.
  const uid = headers.get('x-user-id') || ''
  if (!uid) throw new Error('Missing x-user-id header (demo). Wire real auth to replace this.')
  return uid
}
