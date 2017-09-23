export default function getEnvironment() {
  if (typeof window !== 'undefined') {
    return window.ENV || 'local';
  }

  return process.env.NODE_ENV || 'local';
}
