/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import xml2js from 'xml2js'

export const getFeeds = (req, res) => {
  axios
    .get('https://api.flickr.com/services/feeds/photos_public.gne')
    .then((response) =>
      xml2js.parseString(response.data, (error, result) => {
        res.status(200).send(result.feed.entry[0].content[0]._)
      })
    )
    .catch(() => {
      res.status(500).json({
        success: false,
        message: 'Server Error!'
      })
    })
}
