import React from 'react'
import '../styles/componentsStyle/button.css'

export default function Button({ text, onClick, type }) {
    return (
        <button className="myBtn" onClick={onClick} type={type}>
            {text}
        </button>
    )
}

// export default function HomePage() {
// return (
// <div>
// <Button
// text="Join Work Force"
// onClick={() => alert('Clicked')}
// type="button"
// />
// </div>
// )
// }