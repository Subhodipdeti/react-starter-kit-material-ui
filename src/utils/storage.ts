export const KEYS = {
    user: '@your-key',
  }
  
  const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : ''
  }
  
  const setStorage = (key: string, data: object) => {
    localStorage.setItem(key, JSON.stringify(data))
  }
  
  const removeStorage = (key: string) => {
    localStorage.removeItem(key)
  }
  
  const removeAllStorage = () => {
    localStorage.clear()
  }
  
  export default { getStorage, setStorage, removeStorage, removeAllStorage }