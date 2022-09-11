import clsx from 'clsx'
import Title from './Title'
import Avatar from './Avatar'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <Avatar />
      <Title />


    </div>
  )
}

export default Hero
