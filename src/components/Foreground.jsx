import React from 'react'
import Card from './Card'

function Foreground() {

    const data = [
        {
            desc: "Lorem ipsum doror sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
    ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
            <Card data={item}/>
        ))}
    </div>
  )
}

export default Foreground