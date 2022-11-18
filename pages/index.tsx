
import { addStore } from '../stores/store'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { bear, bearIncrease,bearDecrease , resetBear } = addStore(state => state)

  return (
    <div className={styles.container}>
     <div>{bear}</div>
     <button onClick={bearIncrease}>bears 숫자 늘리기</button>
     <button onClick={bearDecrease}>bear 숫자 감소하기</button>
     <button onClick={resetBear}>bears 숫자 초기화 하기</button>
    </div>
  )
}
