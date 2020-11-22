# Timeouts and intervals

What if you want to execute a function in the future? 

## Theory

### The `setTimeout()` function

The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) function allows you to execute a function in the future. This function takes two arguments: 
- The function to execute
- The time, in milliseconds (thousandths of a second), the timer should wait before the specified function or code is executed.

#### Simple example

Let's start with a basic example, you can try this directly in the console.

```javascript
console.log('WARNING! In exactly five seconds something will explode')

function theExplosion(){
  console.log('BOOM!')
}

setTimeout(theExplosion, 5000)
```

You can also combine timeout and events, the only limit is your imagination.
```javascript
function theExplosion(){
  alert('BOOM!')
}

const button = document.createElement('button')
button.textContent = 'WARNING'
button.addEventListener('click', () => {
  // this will delay the event by 5 seconds
  setTimeout(theExplosion, 5000)
})
document.body.appendChild(button)
```

#### Recursion

You can use [recursion](https://en.wikipedia.org/wiki/Recursion) (a function that calls itself) to create repetitive delays.

```javascript
let times = 0
function heyYou(){
  console.log('Hey! You! I called you '+ times + ' times!')
  times++

  const nextCall = Math.floor(Math.random() * 2000) // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall)
}
```

### The `setInterval()` function

The [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) is another way to call a function multiple times. It works exactly like `setTimeout` except, the function is called repetitively.

#### Simple example

The previous "hey you" example can be rewritten like this:

```javascript
let times = 0
function heyYou(){
  console.log('Hey! You! I called you '+ times + ' times!')
  times++
}

setInterval(heyYou, 1000)
```

### Clearing timers

You can cancel any previously set interval or timeout, using `clearTimeout` or `clearInterval`.
```javascript
let interval
let times = 0

function heyYou(){
  console.log('Hey! You! I called you '+ times + ' times!')
  times++
}

buttonThreeSeconds = document.createElement('button')
buttonThreeSeconds.textContent = 'say hey every 3 seconds'
buttonThreeSeconds.addEventListener('click', () => {
  interval = setInterval(heyYou, 3000)
})

buttonStop = document.createElement('button')
buttonStop.textContent = 'Stop saying hey'
buttonStop.addEventListener('click', () => {
  // We must first check if there is an interval
  if(interval != undefined){
    clearInterval(interval)
  }
})

document.body.appendChild(buttonThreeSeconds)
document.body.appendChild(buttonStop)
```

## Exercises

### Exercise 1 

Write a function that mimics the behaviour of a typewriter.

Using `setInterval` display the word `prout` one character at a time (one letter per second). Once the word is written on the screen clear the interval.

### Exercise 2

Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

### Exercise 3

Create a `<div>` with a className `apple` (make a 50px-radius red circle, for example). When you click on it it should fall 400px down on the page, accelarating 1px every 100 milisecond. Once the apple has fallen down 400px, the function should stop. Use the arrow keys to move the apple from left to right. Create a button to reset the position of the apple on top of the screen.

Use the following snippet to get started.

```javascript
let apple = {
  x: 0,
  y: 0,
  a: 0
}

function gravity(){
  apple.a += 1
  apple.y += apple.a
}
```
