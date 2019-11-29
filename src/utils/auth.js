// import storage from '@/utils/storage'
import storage from 'sweet-storage'
const TokenKey = 'x-token'

export function getToken() {
  return storage.get(TokenKey)
}

export function setToken(token) {
  return storage.save(TokenKey, token,86400000)
}

export function removeToken() {
  return storage.remove(TokenKey)
}
