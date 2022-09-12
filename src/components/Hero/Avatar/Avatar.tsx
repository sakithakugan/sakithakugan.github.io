import clsx from 'clsx'
import avatar from './sakitha-profile.png'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx('mx-auto flex justify-center w-48 lg:w-56')}>
     <img src={avatar} alt='image'/>
    </div>
  )
}

export default Avatar
