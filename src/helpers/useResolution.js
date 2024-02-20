import { useMediaQuery } from 'react-responsive'

function useResolution() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' })
  const isLowDesktop = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1200px)' })

  if (isMobile) {
    return 'mobile'
  } else if (isTablet) {
    return 'tablet'
  } else if (isLowDesktop) {
    return 'lowDesktop'
  } else {
    return 'highDesktop'
  }
}

export default useResolution;