import React from 'react'
import { listPoints } from "../data"

const listChar = [{
    name: "A",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]


},
{
    name: "B",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "C",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "D",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "E",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "F",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "G",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "H",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "I",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "J",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "K",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "L",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "M",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "N",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "O",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "P",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "Q",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "R",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "S",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "T",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "U",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "V",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "X",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "Y",
    point: listPoints[Math.floor(Math.random() * listPoints.length)]

},
{
    name: "W",
    point: listPoints[Math.floor(Math.random() * listPoints.length)],

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
