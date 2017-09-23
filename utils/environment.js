export default function getEnvironment() {
  if (typeof window !== 'undefined') {
    return window.ENV;
  }

  return process.env.NODE_ENV;
}
