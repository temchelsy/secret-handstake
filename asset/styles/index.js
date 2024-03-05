function convertToHandshake () {
  const number = parseInt(document.getElementById('number-input').value)
  const binary = number.toString(2).split('').reverse()
  const handshake = []

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (i === 0) handshake.push('wink')
      if (i === 1) handshake.push('double blink')
      if (i === 2) handshake.push('close your eyes')
      if (i === 3) handshake.push('jump')
      if (i === 4) handshake.reverse()
    }
  }

  document.getElementById('handshake').innerText = handshake.join(', ')
}

convertToHandshake()
