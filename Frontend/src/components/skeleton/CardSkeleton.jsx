import style from './Skeleton.module.css'

const CardSkeleton = () => {
  return (
    <div className={style['skeleton']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default CardSkeleton
