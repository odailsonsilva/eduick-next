import Lottie from 'react-lottie'
import loadingLottie from '../../../../public/lotties/loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export const Loading = () => {
  return <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
}
