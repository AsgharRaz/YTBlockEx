sources = () => [
  'meta[name="og:video:secure_url"]',
  'meta[name="og:video:url"]',
  'meta[name="twitter:player"]',
  'link[itemprop="embedUrl"]'
]

players = () => [
  '#player-full-bleed-container',
  'yt-playability-error-supported-renderers',
  'ytd-enforcement-message-view-model',
  '#ytd-player'
]

buildUrl = () => {
  const videoId = new URLSearchParams(window.location.search).get("v")
  return `https://www.youtube.com/embed/${videoId}`
}

unblock = () => {
  let player = players().map(selector => document.querySelector(selector)).find(source => !!source)
  let source = sources().map(selector => document.querySelector(selector)?.content).find(source => !!source) || buildUrl()

  if (player && source) {
    const iframe = document.createElement("iframe")
    iframe.style = "width: 100%; height: 100%"
    iframe.title = "unblocked video"
    iframe.frameborder = "0"
    iframe.src = source
    player.replaceWith(iframe)
    console.log(`YTBlockEx: UNLOCKED video! source: ${source}, player: ${player.tagName} ${player.id}`)
  } else {
    console.error(`YTBlockEx: failed to find either player or source - source: ${source}, player: ${player}`)
  }
}

unblock()
