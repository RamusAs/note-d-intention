import { useRef, useState } from "react"
import { useOnClickOutside } from "../useOnClickOutside"

export const Card = ({info, content, className}) => {
  const modal = useRef(null)
  const [full,setFull] = useState(false)
  useOnClickOutside(modal, () => setFull(false))

  return (
    <div ref={modal} className={`card ${className} ${full ? "full-screen" : ""}`} >
      {!full &&
        <div className="infos" onClick={() => setFull(true)}>
          {info}
          
          {className !== "div2" &&
          <span className="link" >
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none">
              <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="currentColor" stroke="currentColor"/>
              <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="currentColor"/>
              <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>}
        </div>
      }
      {full && 
        <div className="content">
          <div className="close" onClick={() => setFull(false)}>
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor"></path></svg>
          </div>
          {content}
        </div>
      }
    </div>
  )
}