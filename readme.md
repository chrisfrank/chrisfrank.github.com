URL module
version 1
info
Resolves a Bandcamp URL to its band, album or track.

URL

http://api.bandcamp.com/api/url/1/info
Examples
http://api.bandcamp.com/api/url/1/info?key=vatnajokull&url=http%3A%2F%2Fmusic.thenepotist.com%2Ftrack%2Fkids

http://api.bandcamp.com/api/url/1/info?key=<key>&url=cults.bandcamp.com

http://api.bandcamp.com/api/url/1/info?key=<key>
&url=http%3A%2F%2Fmusic.sufjan.com%2Ftrack%2Fenchanting-ghost
Parameters

url – the Bandcamp URL of a band, album or track that you want to resolve. The scheme (“http://”) is optional. It must be URL encoded.
Response

band_id – the band’s numeric id.
album_id – the album’s numeric id.
track_id – the track’s numeric id.
