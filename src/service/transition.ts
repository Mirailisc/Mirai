export const pageVariants = {
  initial: {
    opacity: 0,
    y: '100vh',
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '-100vh',
  },
}

export const pageTransition = {
  type: 'spring',
  duration: 1,
}
