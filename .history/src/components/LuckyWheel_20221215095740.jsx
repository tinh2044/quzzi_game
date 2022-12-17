import React from 'react'
import { listPoints } from "../data"

const listChar = [{
    name: "A"


},
{
    name: "B"

},
{
    name: "C"

},
{
    name: "D"

},
{
    name: "E"

},
{
    name: "F"

},
{
    name: "G"

},
{
    name: "H"

},
{
    name: "I"

},
{
    name: "J"

},
{
    name: "K"

},
{
    name: "L"

},
{
    name: "M"

},
{
    name: "N"

},
{
    name: "O"

},
{
    name: "P"

},
{
    name: "Q"

},
{
    name: "R"

},
{
    name: "S"

},
{
    name: "T"

},
{
    name: "U"

},
{
    name: "V"

},
{
    name: "X"

},
{
    name: "Y"

},
{
    name: "W",

}
]
function LuckyWheel() {

    console.log(listChar.length)


    return (
        <div className='lucky'>
            <h2>Lucky</h2>

            <div className='main-lucky'>
                <div className='item-lucky'>A</div>
                <div className='item-lucky'>B</div>
                <div className='item-lucky'>C</div>
                <div className='item-lucky'>D</div>
                <div className='item-lucky'>F</div>
            </div>
        </div>
    )
}

export default LuckyWheel
