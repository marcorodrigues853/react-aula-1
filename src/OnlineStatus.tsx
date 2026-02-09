import './onlineStatus.css'
function OnlineStatus({ isOnline }: { isOnline: boolean }) {
  const status = isOnline ? 'online' : 'offline'
  return <div className={status + ' status'} />
}

export default OnlineStatus
