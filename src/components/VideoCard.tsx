import type { Video } from "../videos"
import styles from "./VideoCard.module.css"

export function VideoCard({ video }: { video: Video }) {
  return (
    <a href="">
      <div className={styles['card-container']}>
        <div className={styles['thumbnail-placeholder']}>
          <img className={styles.thumbnail} src={video.thumbnail} />
          <span className={styles.duration}>{video.duration}</span>
        </div>
        <div>
          <div className={styles.title}>{video.title}</div>
          <div className={styles.author}>
            <span >{video.author}</span> - <span>{video.views} vues</span>
          </div>
          <div className={styles.tags}>
            {video.categories.slice(0, 3).map((category, index) => (
              <span className={styles.tag} key={index}>{category}</span>
            ))}
            {video.categories.length > 3 && "..."}
          </div>
        </div>
      </div>
    </a>
  )
}
