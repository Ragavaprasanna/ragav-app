export function ColorBox({color}){
    const styles={
      height: "50px",
      width:"150px",
      background:color,
      margin:"10px 0px",
    }
    return <div style={styles}></div>
  }