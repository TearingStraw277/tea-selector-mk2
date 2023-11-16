"use client"

export default function Home(){

  function handleClick(){
    window.open("./python/test.py")
  }
  return(
    <div>
      <button onClick={handleClick}>Work</button>
    </div>
  )
}
