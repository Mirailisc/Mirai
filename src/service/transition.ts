export const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vh',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vh',
  },
}

export const pageTransition = {
  type: 'spring',
  duration: 1,
}
