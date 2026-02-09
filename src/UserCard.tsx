import OnlineStatus from './OnlineStatus'
import './userCard.css'

interface IUser {
  name: string
  age: number
  srcImage?: string
  isOnline: boolean
}
function UserCard({
  name,
  age,
  srcImage = 'https://cdn.vectorstock.com/i/1000v/43/93/default-avatar-photo-placeholder-icon-grey-vector-38594393.jpg',
  isOnline = false,
}: IUser) {
  return (
    <>
      <div className="container">
        <img width={100} height={100} src={srcImage} alt="" />
        <div style={{ display: 'grid' }}>
          <div>
            <span>
              {name} {isOnline && ' | online'}
            </span>
          </div>
          <OnlineStatus isOnline={isOnline} />
          {/* <span>
            {name} | {isOnline && 'online'} {!isOnline && 'offline'}
          </span> */}

          <span>{age}</span>
        </div>
      </div>
    </>
  )
}

export default UserCard

// function saldo(...props){

// }

// saldo(200,200,1,2,3,4,63,645,567,768,7689,789,8,9080,980,90,90)
