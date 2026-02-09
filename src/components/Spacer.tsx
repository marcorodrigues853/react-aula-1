interface ISpacer {
  height: string
}
function Spacer({ height = '12px' }: ISpacer) {
  return <div style={{ height: height }}></div>
}

export default Spacer
