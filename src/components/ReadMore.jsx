import { useState } from "react"

export default function ReadMore({ text }) {

    const [isExpanded, setIsExpanded] = useState(false)

    if (text.length <= 325) {
        return (
            <p>
                {text}
            </p>
        )
    } else {
        return (
            <p>
                {text.substring(0, 325)}
                {!isExpanded && (<span>... </span>)}
                {isExpanded && (<span>{text.substring(325)}</span>)}
                <span
                    className='text-danger text-decoration-underline'
                    role="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'read less' : 'read more'}
                </span>
            </p >
        )
    }
}



/* function cropOverview(text) {
} */


/*  const ReadMoreProps = {
     id: '',
     text: '',
     amountOfWords: 76
 }

 const ReadMore = (ReadMoreProps) => {

     const splittedText = text.split(' ')
     const itCanOverflow = splittedText.length > amountOfWords
     const beginText = itCanOverflow
         ? splittedText.slice(0, amountOfWords - 1).join(' ')
         : text
     const endText = splittedText.slice(amountOfWords - 1).join(' ')

     return (
         <p id={id}>
             {beginText}
             {itCanOverflow && (
                 <>
                     {!isExpanded && <span>... </span>}
                     <span
                         className={`${!isExpanded && 'hidden'}`}
                         aria-hidden={!isExpanded}
                     >
                         {endText}
                     </span>
                     <span
                         className='text-violet-400 ml-2'
                         role="button"
                         tabIndex={0}
                         aria-expanded={isExpanded}
                         aria-controls={id}
                         onKeyDown={handleKeyboard}
                         onClick={() => setIsExpanded(!isExpanded)}
                     >
                         {isExpanded ? 'show less' : 'show more'}
                     </span>
                 </>
             )}
         </p>
     )
 }
} */