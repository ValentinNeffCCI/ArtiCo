import classes from './Skeleton.module.css'

const CardSkeleton = () => {
  return (
    <div className={classes['skeleton']}>
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
