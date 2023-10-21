sources = () => [
  'meta[name="og:video:secure_url"]',
  'meta[name="og:video:url"]',
  'meta[name="twitter:player"]',
  'link[itemprop="embedUrl"]'
]

players = () => [
  '#ytd-player',
  'yt-playability-error-supported-renderers'
]

source = () => {
  return sources().map(selector => document.querySelector(selector)?.content).find(source => !!source)
}

video = () => {
  return players().map(selector => document.querySelector(selector)).find(source => !!source)
}

unblock = () => {
  const iframe = document.createElement("iframe")
  iframe.style = "width: 100%; height: 100%"
  iframe.title = "unblocked video"
  iframe.frameborder = "0"
  iframe.src = source()
  video().replaceWith(iframe)
}

unblock()

